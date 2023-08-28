import { createReducer, on } from '@ngrx/store'
import { IFeedState } from '../types/feedState.interface'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccesAction,
} from './actions/getFeed.actions'
import { routerNavigationAction } from '@ngrx/router-store'

const initialSate: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
}

export const feedReducer = createReducer(
  initialSate,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccesAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): IFeedState => initialSate)
)
