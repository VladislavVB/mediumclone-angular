import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserProfileComponent } from './copmonents/user-profile/user-profile.component'
import { RouterModule, Routes } from '@angular/router'
import { UserProfileServices } from './services/user-profile.service'
import { EffectsModule } from '@ngrx/effects'
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect'
import { StoreModule } from '@ngrx/store'
import { userProfileReducer } from './store/reducers'
import { FeedModule } from '../shared/modules/feed/feed.module'

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', userProfileReducer),
    FeedModule
  ],
  declarations: [UserProfileComponent],
  providers: [UserProfileServices],
})
//46 был последним уроком
export class UserProfileModule {}
