import { ActionReducerMap } from '@ngrx/store';
import { authFeaturekey, authReducer, AuthState } from './auth/auth.reducer';

export interface RootState {
  [authFeaturekey]: AuthState;
}

export const rootReducer: ActionReducerMap<RootState> = {
  [authFeaturekey]: authReducer,
};
