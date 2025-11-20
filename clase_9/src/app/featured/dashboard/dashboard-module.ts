import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Dashboard } from './dashboard';
import { SharedModule } from '../../shared/shared-module';
import { Home } from './home/home';

@NgModule({
  declarations: [Dashboard, Home],
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
})
export class DashboardModule {}
