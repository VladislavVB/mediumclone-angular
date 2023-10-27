import { NgModule } from '@angular/core'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { ArticleComponent } from './components/article/article.component'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { GetArticleEffect } from './store/effects/getArticle.effect'
import { articleReducer } from './store/reducers'
import { RouterModule } from '@angular/router'
import { ErrorMessageModule } from '../shared/modules/errorMessage/error-message.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'
import { StoreModule } from '@ngrx/store'
import { TagListModule } from '../shared/modules/tagList/tag-list.module'
import { ArticleService } from './services/article.services'
import { DeleteArticleEffect } from './store/effects/deliteArticle.effect'
import { FormatedService } from '../shared/services/formated.service'
import { AddToFollowModule } from '../shared/modules/add-to-follow/add-to-follow.module'
import { AddToFavoriteModule } from '../shared/modules/add-to-favorite/add-to-favorite.module'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [
    TagListModule,
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', articleReducer),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    AddToFollowModule,
    AddToFavoriteModule,
  ],
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  providers: [SharedArticleService, ArticleService, FormatedService],
})
export class ArticleModule {}
