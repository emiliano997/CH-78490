import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Students } from './students';

const routes: Routes = [
  {
    path: '',
    component: Students,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
