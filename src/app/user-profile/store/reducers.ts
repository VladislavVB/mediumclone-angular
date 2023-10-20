import { createReducer, on } from '@ngrx/store'
import { IUserProfileState } from '../types/userProfileState.interface'
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction,
} from './actions/getUserProfile.action'

const initialSate: IUserProfileState = {
  isLoading: false,
  error: null,
  data: null,
}

export const userProfileReducer = createReducer(
  initialSate,
  on(
    getUserProfileAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): IUserProfileState => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: false,
    })
  )
)
