import { createReducer, on } from '@ngrx/store'
import { IAuthState } from '../types/authState.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccesAction,
} from './actions/register.action'
import { loginAction, loginFailureAction, loginSuccesAction } from './actions/login.action'

const initialSate: IAuthState = {
  isSubmiting: false,
  currentUser: null,
  isLoggendIn: null,
  validationsErrors: null,
}

export const authReducer = createReducer(
  initialSate,
  //register
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmiting: true,
      validationsErrors: null,
    })
  ),
  on(
    registerSuccesAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmiting: false,
      isLoggendIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmiting: false,
      validationsErrors: action.errors,
    })
  ),
  //login
  on(
    loginAction,
    (state): IAuthState => ({
      ...state,
      isSubmiting: false,
      validationsErrors: null,
    })
  ),
  on(
    loginSuccesAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmiting: false,
      isLoggendIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmiting: false,
      validationsErrors: action.errors,
    })
  )
)
