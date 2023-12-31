import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionsTypes'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSuccesAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
)
