import { createReducer, on } from '@ngrx/store'

import { ISettingsState } from './types/settingsState.interface'
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from 'src/app/auth/store/actions/updateCurrentUser'

const initialSate: ISettingsState = {
  isSubmiting: false,
  validationsErrors: null,
}

export const settingsReducer = createReducer(
  initialSate,
  on(
    updateCurrentUserAction,
    (state): ISettingsState => ({
      ...state,
      isSubmiting: true,
      validationsErrors: null,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): ISettingsState => ({
      ...state,
      isSubmiting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): ISettingsState => ({
      ...state,
      isSubmiting: false,
      validationsErrors: action.errors,
    })
  )
)
