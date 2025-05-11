import { createAction, props } from '@ngrx/store';

export let loadUsers= createAction('load users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: any[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);
