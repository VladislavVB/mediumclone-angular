import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../../types/actionsTypes'
import { IRegisterRequest } from '../../types/registerRequest.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: IRegisterRequest }>()
)

export const registerSuccesAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
)

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE)
