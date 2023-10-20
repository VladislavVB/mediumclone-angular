import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { YourFeedComponent } from './components/your-feed/your-feed.component'
import { RouterModule, Routes } from '@angular/router'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { BannerModule } from '../shared/modules/banner/banner.module'
import { PopularTagsModule } from '../shared/modules/popularTags/popular-tags.module'
import { FeedTogglerModule } from '../shared/modules/feedToggler/feed-toggler.module'

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
