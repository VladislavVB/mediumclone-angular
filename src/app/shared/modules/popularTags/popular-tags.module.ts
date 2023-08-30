import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component'
import { TagListModule } from '../tagList/tag-list.module'
import { LoadingModule } from '../loading/loading.module'
import { ErrorMessageModule } from '../errorMessage/error-message.module'
import { StoreModule } from '@ngrx/store'
import { popularTagsReducer } from './store/reducers'
import { EffectsModule } from '@ngrx/effects'
import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect'
import { PopularTagsService } from './services/popularTags.service'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TagListModule,
    LoadingModule,
    ErrorMessageModule,
    StoreModule.forFeature('popularTags', popularTagsReducer),
    EffectsModule.forFeature([GetPopularTagsEffect]),
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
