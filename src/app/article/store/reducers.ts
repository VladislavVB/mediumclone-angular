import { createReducer, on } from '@ngrx/store'
import { IArticleState } from '../types/articleState.interface'

import { routerNavigationAction } from '@ngrx/router-store'
import { getArticleAction, getArticleFailureAction, getArticleSuccesAction } from './actions/getArticle.actions'

const initialSate: IArticleState = {
  isLoading: false,
  error: null,
  data: null,
}

export const articleReducer = createReducer(
  initialSate,
  on(
    getArticleAction,
    (state): IArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccesAction,
    (state, action): IArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): IArticleState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): IArticleState => initialSate)
)
