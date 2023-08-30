import { createSelector } from '@ngrx/store'
import { IAppState } from 'src/app/shared/types/appState.interface'

export const popularTagsFeautureSelector = (state: IAppState) =>
  state.popularTags

export const isLoadingSelector = createSelector(
  popularTagsFeautureSelector,
  (tagsState) => tagsState.isLoading
)
export const errorSelector = createSelector(
  popularTagsFeautureSelector,
  (tagsState) => tagsState.error
)
export const popularTagsSelector = createSelector(
  popularTagsFeautureSelector,
  (tagsState) => tagsState.data
)
