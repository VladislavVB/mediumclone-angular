import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'

export const settingsFeautereSelector = (state: IAppState) => state.settings

export const isSubmittingselector = createSelector(
  settingsFeautereSelector,
  (settingsState) => settingsState.isSubmiting
)

export const valudationsErrorsSelector = createSelector(
  settingsFeautereSelector,
  (settingsState) => settingsState.validationsErrors
)

