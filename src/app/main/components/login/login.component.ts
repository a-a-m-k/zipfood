import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { User } from '../../../models/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from '../../../store/app.states';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  getState: Observable<any>;
  user: User | null;

  constructor(
    private dialog: MatDialog, 
    private store: Store<AppState>,
    public authService: LoginService) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.user = state.user;
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginDialogComponent, { width: '250px' });
  }

}
