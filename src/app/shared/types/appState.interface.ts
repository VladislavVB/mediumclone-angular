import { IAuthState } from 'src/app/auth/types/authState.interface'
import { IFeedState } from '../modules/feed/types/feedState.interface'
import { IPopularTagsState } from '../modules/popularTags/types/popularTagsState.interface'
import { IArticleState } from 'src/app/article/types/articleState.interface'
import { ICreateArticleState } from 'src/app/create-article/store/types/createArticleState.interface'
import { IEditArticleState } from 'src/app/edit-article/store/types/editArticleState.interface'
import { ISettingsState } from 'src/app/settings/store/types/settingsState.interface'
import { IUserProfileState } from 'src/app/user-profile/types/userProfileState.interface'

export interface IAppState {
  auth: IAuthState
  feed: IFeedState
  popularTags: IPopularTagsState
  article: IArticleState
  editArticle: IEditArticleState
  createArticle: ICreateArticleState
  settings: ISettingsState
  userProfile: IUserProfileState
}
