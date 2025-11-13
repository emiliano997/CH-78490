import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeaturekey, AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeaturekey);

export const selectUser = createSelector(selectAuthState, (state: AuthState) => state.user);

export const selectIsAuth = createSelector(
  selectAuthState,
  (state: AuthState) => state.user !== null
);
