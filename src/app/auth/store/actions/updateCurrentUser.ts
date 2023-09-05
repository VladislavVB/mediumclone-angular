import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionsTypes'
import { ICurrentUserInput } from 'src/app/shared/types/currentUserInput.interface'
import { IBackendErrors } from '../../types/backendErrors.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: ICurrentUserInput }>()
)

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
)

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
  props<{ errors: IBackendErrors }>()
)
