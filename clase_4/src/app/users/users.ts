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
    { id: 1, nombre: 'norka', apellido: 'garcia', email: 'norka@gmail.com' },
    { id: 2, nombre: 'juan', apellido: 'perez', email: 'juan@gmail.com' },
    { id: 3, nombre: 'maria', apellido: 'lopez', email: 'maria@gmail.com' },
    { id: 4, nombre: 'pedro', apellido: 'gonzalez', email: 'pedro@gmail.com' },
    { id: 5, nombre: 'ana', apellido: 'diaz', email: 'ana@gmail.com' },
    { id: 6, nombre: 'luis', apellido: 'fernandez', email: 'luis@gmail.com' },
    { id: 7, nombre: 'sofia', apellido: 'martinez', email: 'sofia@gmail.com' },
    { id: 8, nombre: 'miguel', apellido: 'garcia', email: 'miguel@gmail.com' },
    { id: 9, nombre: 'elena', apellido: 'hernandez', email: 'elena@gmail.com' },
    { id: 10, nombre: 'carlos', apellido: 'lopez', email: 'carlos@gmail.com' },
    { id: 11, nombre: 'laura', apellido: 'perez', email: 'laura@gmail.com' },
  ];

  onAddUser(user: User) {
    console.log(user);

    this.usersList.push({
      ...user,
      id: this.usersList[this.usersList.length - 1].id + 1,
    });
  }
}
