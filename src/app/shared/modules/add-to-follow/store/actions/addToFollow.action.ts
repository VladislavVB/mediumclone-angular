import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionsTypes'
import { IProfile } from 'src/app/shared/types/profile.interface';

export const addToFollowAction = createAction(
  ActionTypes.ADD_TO_FOLLOW,
  props<{ isFollow: boolean; slug: string }>()
)

export const addToFollowSuccessAction = createAction(
  ActionTypes.ADD_TO_FOLLOW_SUCCESS,
  props<{ profile: IProfile }>()
)

export const addToFollowFailureAction = createAction(
  ActionTypes.ADD_TO_FOLLOW_FAILURE
)
