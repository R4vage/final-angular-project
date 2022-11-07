import { createAction, props } from '@ngrx/store';
import { AuthorizationSuccess } from '../models/authorization.models';

export const loginSuccessful = createAction('[Login] User login successful ', props<AuthorizationSuccess>());

export const logOut = createAction('[Top Menu] Logout');
