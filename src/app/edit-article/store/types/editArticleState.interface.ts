import { IBackendErrors } from "src/app/auth/types/backendErrors.interface"
import { IArticle } from "src/app/shared/types/article.interface"

export interface  IEditArticleState {
  isSubmiting: boolean
  validationsErrors: IBackendErrors | null
  isLoading: boolean
  article: IArticle | null
}