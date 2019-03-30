import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap, map, mergeMap } from 'rxjs/operators';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
import {
  AuthActionTypes,
  LogIn,
  LogOut,
  LogInSuccess,
  LogInFailure
} from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: LoginService,
    private router: Router
  ) { }

  @Effect()
  LogIn = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    mergeMap((action: LogIn) =>
      this.authService
        .login(action.payload)
        .pipe(
          map((user: User) => 
            (!user.message) 
            ? new LogInSuccess({ token: user.token, username: action.payload.username})
            : new LogInFailure(user.message)
          )
        )
    )
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/patients');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/');
    })
  );

}