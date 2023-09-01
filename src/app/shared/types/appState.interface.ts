import { IAuthState } from 'src/app/auth/types/authState.interface'
import { IFeedState } from '../modules/feed/types/feedState.interface'
import { IPopularTagsState } from '../modules/popularTags/types/popularTagsState.interface'
import { IArticleState } from 'src/app/article/types/articleState.interface'

export interface IAppState {
  auth: IAuthState
  feed: IFeedState
  popularTags: IPopularTagsState
  article: IArticleState
}
