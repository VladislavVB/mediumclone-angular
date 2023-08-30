import { createReducer, on } from '@ngrx/store'
import { IPopularTagsState } from '../types/popularTagsState.interface'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccesAction,
} from './actions/getPopularTags'

const initialSate: IPopularTagsState = {
  isLoading: false,
  data: null,
  error: null,
}

export const popularTagsReducer = createReducer(
  initialSate,
  on(
    getPopularTagsAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    getPopularTagsSuccesAction,
    (state, action): IPopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: false,
    })
  )
)
