import { Injectable } from '@angular/core';
import { User } from '../users/interface/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  userEdit = new BehaviorSubject<User | null>(null);
  userEdit$ = this.userEdit.asObservable();

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

  getUsers() {
    this.usersSubject.next([...this.usersList]);
  }

  addUser(user: User) {
    console.log('Servicio', user);

    this.usersList.push({
      ...user,
      id: this.usersList[this.usersList.length - 1].id + 1,
    });

    this.usersSubject.next([...this.usersList]);
  }

  setUpdateUser(id: number) {
    this.userEdit.next(this.usersList.find((u) => u.id === id) || null);
  }

  updateUser(id: number, data: User) {
    let index = this.usersList.findIndex((u) => u.id === id);

    if (index === -1) {
      return undefined;
    }

    this.usersList[index] = {
      ...this.usersList[index],
      ...data,
    };

    this.usersSubject.next([...this.usersList]);
  }

  deleteUser(id: number) {
    this.usersList = this.usersList.filter((u) => u.id !== id);
    this.usersSubject.next([...this.usersList]);
  }
}
