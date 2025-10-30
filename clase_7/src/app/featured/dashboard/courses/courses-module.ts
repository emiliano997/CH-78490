import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing-module';
import { Courses } from './courses';
import { CoursesTable } from './courses-table/courses-table';
import { CoursesForm } from './courses-form/courses-form';
import { SharedModule } from '../../../shared/shared-module';

@NgModule({
  declarations: [Courses, CoursesTable, CoursesForm],
  imports: [CommonModule, CoursesRoutingModule, SharedModule],
})
export class CoursesModule {}
