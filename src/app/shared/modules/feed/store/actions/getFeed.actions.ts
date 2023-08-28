import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionsTypes'
import { IGetFeedResponse } from '../../types/getFeedResponse.interface'

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{ url: string }>()
)

export const getFeedSuccesAction = createAction(
  ActionTypes.GET_FEED_USER_SUCCESS,
  props<{ feed: IGetFeedResponse }>()
)

export const getFeedFailureAction = createAction(
  ActionTypes.GET_FEED_USER_FAILURE
)
