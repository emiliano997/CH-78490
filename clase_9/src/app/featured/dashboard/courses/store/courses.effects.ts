import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoursesService } from '../../../../core/services/courses/courses';
import { CoursesActions } from './courses.actions';
import { catchError, concatMap, delay, map } from 'rxjs';

@Injectable()
export class CoursesEffect {
  loadCourses$ = createEffect(() => {
    console.log(this.actions$);

    return this.actions$.pipe(
      ofType(CoursesActions.loadCourses),
      concatMap(() =>
        this.courseService.getCoursesForEffect().pipe(
          delay(2000),
          map((courses) => {
            console.log('Load courses', courses);

            return CoursesActions.loadCoursesSuccess({ courses });
          }),
          catchError((error) => [CoursesActions.loadCoursesFailure({ error })])
        )
      )
    );
  });

  constructor(private courseService: CoursesService, private actions$: Actions) {
    this.actions$ = inject(Actions);
  }
}
