import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Courses } from './courses';
import { CoursesTable } from './courses-table/courses-table';
import { CoursesForm } from './courses-form/courses-form';

const routes: Routes = [
  {
    path: '',
    component: Courses,
    children: [
      {
        path: '',
        component: CoursesTable,
      },
      {
        path: 'create',
        component: CoursesForm,
      },
      {
        path: 'edit/:id',
        component: CoursesForm,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
