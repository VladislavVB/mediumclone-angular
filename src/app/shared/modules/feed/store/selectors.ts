import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'

export const feedFeautereSelector = (state: IAppState) => state.feed

export const isLoadingSelector = createSelector(
  feedFeautereSelector,
  (feedState) => feedState.isLoading
)

export const errorSelector = createSelector(
  feedFeautereSelector,
  (feedState) => feedState.error
)
export const feedSelector = createSelector(
  feedFeautereSelector,
  (feedState) => feedState.data
)
