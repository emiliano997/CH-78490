import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './featured/auth/login/login';
import { Dashboard } from './featured/dashboard/dashboard';
import { authGuard } from './core/guards/auth/auth-guard';
import { loginGuard } from './core/guards/login/login-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
    canActivate: [loginGuard],
  },
  {
    path: 'dashboard',
    component: Dashboard,
    loadChildren: () =>
      import('./featured/dashboard/dashboard-module').then((m) => m.DashboardModule),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
