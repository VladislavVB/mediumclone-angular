import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionsTypes'
import { IArticle } from 'src/app/shared/types/article.interface'

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
)

export const getArticleSuccesAction = createAction(
  ActionTypes.GET_ARTICLE_USER_SUCCESS,
  props<{ article: IArticle }>()
)

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_USER_FAILURE
)
