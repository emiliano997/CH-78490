import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersList } from './components/users-list/users-list';
import { UserForm } from './components/user-form/user-form';

@NgModule({
  declarations: [Users, UsersList, UserForm],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [Users],
})
export class UsersModule {}
