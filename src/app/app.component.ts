import { Component, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersState } from './store/users.reducer';
import * as UsersActions from './store/users.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 private store = inject<Store<{ usersState: UsersState }>>(Store);

  users = signal<any[]>([]);
  loading = signal<boolean>(false);

  constructor() {
    this.store.select(state => state.usersState).subscribe(state => {
      this.users.set(state.users);
      this.loading.set(state.loading);
    });
  }

  loadUsers() {
    this.store.dispatch(UsersActions.loadUsers());
  }
}
