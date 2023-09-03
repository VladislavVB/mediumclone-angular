import { createReducer, on } from '@ngrx/store'

import { ICreateArticleState } from './types/createArticleState.interface'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccesAction,
} from './actions/createArticle.action'

const initialSate: ICreateArticleState = {
  isSubmiting: false,
  validationsErrors: null,
}

export const createArticleReducer = createReducer(
  initialSate,
  on(
    createArticleAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmiting: true,
      validationsErrors: null,
    })
  ),
  on(
    createArticleSuccesAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmiting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): ICreateArticleState => ({
      ...state,
      isSubmiting: false,
      validationsErrors: action.errors,
    })
  )
)
