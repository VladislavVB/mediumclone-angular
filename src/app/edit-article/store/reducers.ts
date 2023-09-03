import { createReducer, on } from '@ngrx/store'

import { IEditArticleState } from './types/editArticleState.interface'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccesAction,
} from './actions/editArticle.action'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccesAction,
} from './actions/getArticle.action'

const initialSate: IEditArticleState = {
  isSubmiting: false,
  validationsErrors: null,
  article: null,
  isLoading: false,
}

export const editArticleReducer = createReducer(
  initialSate,
  on(
    updateArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isSubmiting: true,
      validationsErrors: null,
    })
  ),
  on(
    updateArticleSuccesAction,
    (state): IEditArticleState => ({
      ...state,
      isSubmiting: false,
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): IEditArticleState => ({
      ...state,
      isSubmiting: false,
      validationsErrors: action.errors,
    })
  ),

  on(
    getArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
      validationsErrors: null,
    })
  ),
  on(
    getArticleSuccesAction,
    (state, action): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: false,
    })
  )
)
