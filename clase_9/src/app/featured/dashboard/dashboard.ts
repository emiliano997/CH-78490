import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth';
import { RootState } from '../../core/store';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUser } from '../../core/store/auth/auth.selector';

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
  user$: Observable<any>;

  constructor(private authService: AuthService, private store: Store<RootState>) {
    this.user$ = this.store.select(selectUser);
  }

  logout() {
    this.authService.logout();
  }
}
