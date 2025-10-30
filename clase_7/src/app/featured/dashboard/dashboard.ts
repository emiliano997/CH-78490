import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  listItems = [
    {
      name: 'Inicio',
      icon: 'home',
      url: '/dashboard',
    },
    {
      name: 'Cursos',
      icon: 'school',
      url: 'courses',
    },
    {
      name: 'Alumnos',
      icon: 'groups',
      url: 'students',
    },
  ];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
