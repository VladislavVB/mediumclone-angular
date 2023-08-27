import { ICurrentUser } from "src/app/shared/types/currentUser.interface"
import { IBackendErrors } from "./backendErrors.interface"

export interface IAuthState {
  isLoading: boolean
  isSubmiting: boolean
  currentUser: ICurrentUser | null
  isLoggendIn: boolean | null
  validationsErrors: IBackendErrors | null
}
