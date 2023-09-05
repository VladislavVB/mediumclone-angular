import { createReducer, on } from '@ngrx/store'
import { IAuthState } from '../types/authState.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccesAction,
} from './actions/register.action'
import {
  loginAction,
  loginFailureAction,
  loginSuccesAction,
} from './actions/login.action'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccesAction,
} from './actions/getCurrentUser'
import { updateCurrentUserSuccessAction } from './actions/updateCurrentUser'

const initialSate: IAuthState = {
  isLoading: false,
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
  ),
  //getCurrentUser
  on(
    getCurrentUserAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccesAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggendIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggendIn: false,
      currentUser: null,
    })
  ),
  //updateUser
  on(
    updateCurrentUserSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      currentUser: action.currentUser,
    })
  ),
  //logout
  on(
    loginAction,
    (): IAuthState => ({
      ...initialSate,
      isLoggendIn: false
    })
  )
)
