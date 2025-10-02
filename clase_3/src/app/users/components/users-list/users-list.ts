import { Component, Input } from '@angular/core';
import { User } from '../../interface/User';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  @Input() users: User[] = [];
}
