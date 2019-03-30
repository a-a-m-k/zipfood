import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDialog } from '@angular/material';
import { User } from '../../../../models/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from '../../../../store/app.states';
import { LogIn } from '../../../../store/actions/auth.actions';

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})

export class LoginDialogComponent {
  loginForm: FormGroup;
  getState: Observable<any>;
  errorMessage: string | null;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
      this.getState = this.store.select(selectAuthState);
      this.createForm();
  }
  
  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;

      if(state.user) {
        this.close();
      }
    });
  }
  
  createForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(form) {
    if (this.loginForm.valid) {
      const payload = {
        username: form.value.login,
        password: form.value.password
      };
      this.store.dispatch(new LogIn(payload));
    }
  }

  close() {
    this.dialogRef.close();
  }

}
