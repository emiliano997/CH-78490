import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses-module').then((m) => m.CoursesModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students-module').then((m) => m.StudentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
