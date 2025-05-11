import {
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { usersReducer } from './store/users.reducer';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UsersEffects } from './store/users.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideStore({ usersState: usersReducer }),
    provideEffects([UsersEffects]),
  ],
};
