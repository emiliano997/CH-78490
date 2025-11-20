import { createFeatureSelector, createSelector } from '@ngrx/store';
import { coursesFeatureKey, CoursesState } from './courses.reducer';

const selectCoursesState = createFeatureSelector<CoursesState>(coursesFeatureKey);

export const selectCourses = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.courses
);

export const selectIsLoading = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.isLoading
);

export const selectError = createSelector(selectCoursesState, (state: CoursesState) => state.error);
