import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeedComponent } from './components/feed/feed.component'
import { EffectsModule } from '@ngrx/effects'
import { GetFeedEffect } from './store/effects/getFeed.effect'
import { StoreModule } from '@ngrx/store'
import { feedReducer } from './store/reducers'
import { FeedService } from './services/feed.service'
import { RouterModule } from '@angular/router'
import { ErrorMessageModule } from '../errorMessage/error-message.module'
import { LoadingModule } from '../loading/loading.module'
import { PaginationModule } from '../pagination/pagination'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', feedReducer),
    ErrorMessageModule,
    LoadingModule,
    PaginationModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
