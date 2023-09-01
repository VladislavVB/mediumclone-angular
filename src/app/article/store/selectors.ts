import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'

export const articleFeautereSelector = (state: IAppState) => state.article

export const isLoadingSelector = createSelector(
  articleFeautereSelector,
  (articeState) => articeState.isLoading
)

export const errorSelector = createSelector(
  articleFeautereSelector,
  (articeState) => articeState.error
)
export const articleSelector = createSelector(
  articleFeautereSelector,
  (articeState) => articeState.data
)
