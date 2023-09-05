import { IBackendErrors } from "src/app/auth/types/backendErrors.interface"

export interface ISettingsState {
  isSubmiting: boolean
  validationsErrors: IBackendErrors | null
}