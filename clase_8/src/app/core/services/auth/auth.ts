import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../utils/constants';
import { User } from './model/User';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersUrl = `${API_URL}/users`;
  user: User | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.get<User[]>(this.usersUrl);
  }

  logout() {
    localStorage.removeItem('token');
    this.user = null;
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

    const isAuthenticated = token === this.user?.email;
    console.log(isAuthenticated);

    return isAuthenticated;
  }
}
