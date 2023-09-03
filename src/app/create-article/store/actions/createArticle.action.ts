import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { IArticleInput } from 'src/app/shared/types/articleInput.interface'
import { IArticle } from 'src/app/shared/types/article.interface'
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface'

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: IArticleInput }>()
)

export const createArticleSuccesAction = createAction(
  ActionTypes.CREATE_ARTICLE_USER_SUCCESS,
  props<{article: IArticle}>()
)

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_USER_FAILURE,
  props<{errors: IBackendErrors}>()
)
