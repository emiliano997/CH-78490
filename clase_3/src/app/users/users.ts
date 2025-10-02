import { Component } from '@angular/core';
import { User } from './interface/User';

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

  h1Style = 'font-size: 55px; color: blue;';

  usersList: User[] = [
    { nombre: 'Norka', apellido: 'Garcia' },
    { nombre: 'Juan', apellido: 'Perez' },
    { nombre: 'Maria', apellido: 'Lopez' },
  ];

  onAddUser(user: User) {
    this.usersList.push(user);
  }
}
