import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users';

@NgModule({
  declarations: [Users],
  imports: [CommonModule],
  exports: [Users],
})
export class UsersModule {}
