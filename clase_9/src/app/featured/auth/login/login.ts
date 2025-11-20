import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../../../core/store';
import { setAuthUser } from '../../../core/store/auth/auth.actions';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<RootState>
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (!this.loginForm.valid) {
      alert('Formulario invalido');
      return;
    }

    try {
      this.authService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((res) => {
          console.log(res);

          const user = res;

          if (!user) {
            throw new Error('Email es inválido');
          }

          if (user.password !== this.loginForm.value.password) {
            throw new Error('Contraseña es inválida');
          }

          this.store.dispatch(setAuthUser({ payload: user }));
          this.router.navigate(['dashboard']);
        });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
}
