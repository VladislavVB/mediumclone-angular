import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'

export const userProfileFeautereSelector = (state: IAppState) => state.userProfile

export const isLoadingSelector = createSelector(
  userProfileFeautereSelector,
  (userProfileState) => userProfileState.isLoading
)

export const errorSelector = createSelector(
  userProfileFeautereSelector,
  (userProfileState) => userProfileState.error
)
export const userProfileSelector = createSelector(
  userProfileFeautereSelector,
  (userProfileState) => userProfileState.data
)
