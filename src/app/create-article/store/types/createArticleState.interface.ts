import { IBackendErrors } from "src/app/auth/types/backendErrors.interface"

export interface  ICreateArticleState {
  isSubmiting: boolean
  validationsErrors: IBackendErrors | null
}