import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
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
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
}
