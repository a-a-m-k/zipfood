import { Action } from '@ngrx/store';
import { AuthActionTypes } from '../actions/auth.actions';
import { User } from '../../models/user';

export interface State {
  user: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}