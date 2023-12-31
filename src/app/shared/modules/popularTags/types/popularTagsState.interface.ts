import { TPopularTag } from "src/app/shared/types/popularTag.type";

export interface IPopularTagsState {
  isLoading: boolean,
  data: TPopularTag[] | null,
  error: string | null
}