import { createFeature, createReducer, on } from '@ngrx/store';
import { Course } from '../../../../core/services/courses/model/Course';
import { CoursesActions } from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  courses: Course[];
  isLoading: boolean;
  error: any;
}

export const initialState: CoursesState = {
  courses: [],
  isLoading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(CoursesActions.loadCourses, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(CoursesActions.loadCoursesSuccess, (state, { courses }) => {
    return {
      ...state,
      isLoading: false,
      courses,
    };
  }),
  on(CoursesActions.loadCoursesFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error,
    };
  })
);

export const coursesFeature = createFeature({
  name: coursesFeatureKey,
  reducer,
});
