import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../utils/constants';
import { User } from './model/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = `${API_URL}/users`;
  user: User | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    this.http.get<User[]>(this.usersUrl).subscribe((users) => {
      const user = users.find((user) => user.email === email);

      if (!user) {
        throw new Error('Email es inválido');
      }

      if (user.password !== password) {
        throw new Error('Contraseña es inválida');
      }

      localStorage.setItem('token', user.email);
      this.user = user;
      this.router.navigate(['dashboard']);
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    const isAuthenticated = token === this.user?.email;
    console.log(isAuthenticated);

    return isAuthenticated;
  }
}
