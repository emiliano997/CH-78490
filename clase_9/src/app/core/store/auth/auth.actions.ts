import { createAction, props } from '@ngrx/store';

export const setAuthUser = createAction('[AUTH] setAuthuser', props<{ payload: any }>());

export const clearAuthUser = createAction('[AUTH] clearAuthuser');
