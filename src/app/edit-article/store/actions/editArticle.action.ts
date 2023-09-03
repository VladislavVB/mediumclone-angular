import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { IArticleInput } from 'src/app/shared/types/articleInput.interface'
import { IArticle } from 'src/app/shared/types/article.interface'
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface'

export const updateArticleAction = createAction(
  ActionTypes.UPDATE_ARTICLE,
  props<{ slug: string; articleInput: IArticleInput }>()
)

export const updateArticleSuccesAction = createAction(
  ActionTypes.UPDATE_ARTICLE_USER_SUCCESS,
  props<{ article: IArticle }>()
)

export const updateArticleFailureAction = createAction(
  ActionTypes.UPDATE_ARTICLE_USER_FAILURE,
  props<{ errors: IBackendErrors }>()
)
