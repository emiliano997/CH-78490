import { Component } from '@angular/core';
import { User } from './interface/User';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrls: ['./users.css', '../app.css'],
})
export class Users {
  nombre: string = 'Andreza';
  apellido: string = 'Campbell';
  edad: number = 20;
  usersList: User[] = [];
  userToEdit: User | null = null;

  h1Style = 'font-size: 55px; color: blue;';

  constructor(private userService: UserService) {}

  onAddUser(user: User) {
    this.userService.addUser(user);
  }

  onEditUser(user: User) {
    this.userToEdit = user;
  }

  onEditRecieved(user: User) {
    let response = this.userService.updateUser(user.id, user);

    if (response) {
      this.userToEdit = null;
    }
  }
}
