import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionsTypes'
import { IArticle } from 'src/app/shared/types/article.interface'

export const deliteArticleAction = createAction(
  ActionTypes.DELITE_ARTICLE,
  props<{ slug: string }>()
)

export const deliteArticleSuccesAction = createAction(
  ActionTypes.DELITE_ARTICLE_SUCCESS
)

export const deliteArticleFailureAction = createAction(
  ActionTypes.DELITE_ARTICLE_FAILURE
)
