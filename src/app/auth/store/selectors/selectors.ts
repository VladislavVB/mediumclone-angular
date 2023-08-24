import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { IAuthState } from '../../types/authState.interface'

export const authFeautereSelector = (state: IAppState) => state.auth

export const isSubmittingselector = createSelector(
  authFeautereSelector,
  (authState) => authState.isSubmiting
)
