import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'

export const createArticleSelector = (state: IAppState) => state.createArticle

export const isSubmittingselector = createSelector(
  createArticleSelector,
  (createArticle) => createArticle.isSubmiting
)

export const valudationsErrorsSelector = createSelector(
  createArticleSelector,
  (createArticle) => createArticle.validationsErrors
)
