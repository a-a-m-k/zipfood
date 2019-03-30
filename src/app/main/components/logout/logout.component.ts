import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from '../../../store/app.states';
import { LogOut } from '../../../store/actions/auth.actions';
import { User } from '../../../models/user';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
})

export class LogoutComponent {
  getState: Observable<any>;
  user: User | null;

  constructor(
    private store: Store<AppState>,
    public authService: LoginService) {
      this.getState = this.store.select(selectAuthState);
  }
  
  ngOnInit() {
    this.getState.subscribe((state) => {
      this.user = state.user;
    });
  }  

  logout() {
      this.store.dispatch(new LogOut());
  }

}
