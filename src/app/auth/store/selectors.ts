import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'

export const authFeautereSelector = (state: IAppState) => state.auth

export const isSubmittingselector = createSelector(
  authFeautereSelector,
  (authState) => authState.isSubmiting
)

export const valudationsErrorsSelector = createSelector(
  authFeautereSelector,
  (authState) => authState.validationsErrors
)
export const isLoggedInSelector = createSelector(
  authFeautereSelector,
  (authState) => authState.isLoggendIn
)

export const isAnonymousInSelector = createSelector(
  authFeautereSelector,
  (authState) => authState.isLoggendIn === false
)

export const currentUserSelector = createSelector(
  authFeautereSelector,
  (authState) => authState.currentUser
)
