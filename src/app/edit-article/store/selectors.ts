import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'

export const editArticleSelector = (state: IAppState) => state.editArticle

export const isSubmittingselector = createSelector(
  editArticleSelector,
  (editArticle) => editArticle.isSubmiting
)
export const valudationsErrorsSelector = createSelector(
  editArticleSelector,
  (editArticle) => editArticle.validationsErrors
)

export const isLoadingSelector = createSelector(
  editArticleSelector,
  (editArticle) => editArticle.isLoading
)
export const articleSelector = createSelector(
  editArticleSelector,
  (editArticle) => editArticle.article
)
