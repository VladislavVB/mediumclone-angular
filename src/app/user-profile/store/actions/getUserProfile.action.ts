import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { IProfile } from 'src/app/shared/types/profile.interface'

export const getUserProfileAction = createAction(
  ActionTypes.GET_USER_PROFILE,
  props<{ slug: string }>()
)

export const getUserProfileSuccessAction = createAction(
  ActionTypes.GET_USER_PROFILE_SUCCES,
  props<{ userProfile: IProfile }>()
)

export const getUserProfileFailureAction = createAction(
  ActionTypes.GET_USER_PROFILE_FAILURE
)
