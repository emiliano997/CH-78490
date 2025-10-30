import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string) {
    if (email !== 'admin@gmail.com' || password !== '1234') {
      throw new Error('Email y contraseña inválidos');
    }

    localStorage.setItem('token', 'admin@gmail.com');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    return token === 'admin@gmail.com';
  }
}
