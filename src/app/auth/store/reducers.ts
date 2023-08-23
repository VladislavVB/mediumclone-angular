import { createReducer, on } from '@ngrx/store'
import { IAuthState } from '../types/authState.interface'
import { registerAction } from './actions/register.action'

const initialSate: IAuthState = {
  isSubmiting: false,
}

export const authReducer = createReducer(
  initialSate,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmiting: true,
    })
  )
)
