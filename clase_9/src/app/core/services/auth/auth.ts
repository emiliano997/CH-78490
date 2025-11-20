import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../utils/constants';
import { User } from './model/User';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from '../../store';
import { setAuthUser } from '../../store/auth/auth.actions';
import { selectUser } from '../../store/auth/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = `${API_URL}/users`;
  user$: Observable<any>;

  constructor(private http: HttpClient, private router: Router, private store: Store<RootState>) {
    // this.user$ = this.store.select((state) => state.auth.user);
    this.user$ = this.store.select(selectUser);

    const token = localStorage.getItem('token');

    if (token) {
      const [email, password] = token.split('&');
      this.login(email, password).subscribe((user) => {
        this.store.dispatch(setAuthUser({ payload: user }));
      });
    }
  }

  login(email: string, password: string) {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map((users) => {
        const user = users.find((user) => user.email === email);

        if (!user) {
          throw new Error('Usuario no encontrado');
        }

        if (user.password !== password) {
          throw new Error('Contraseña incorrecta');
        }

        this.setToken(`${user.email}&${user.password}`);
        this.store.dispatch(setAuthUser({ payload: user }));

        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(setAuthUser({ payload: null }));
    this.router.navigate(['login']);
  }

  setToken(email: string) {
    localStorage.setItem('token', email);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    return true;
  }
}
