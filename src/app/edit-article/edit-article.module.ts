import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditArticleComponent } from './components/edit-article/edit-article.component'
import { RouterModule } from '@angular/router'
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module'
import {  EditArticleService } from './services/edit-article.service'
import { EffectsModule } from '@ngrx/effects'
import { UpdateArticleEffect } from './store/effects/updateArticle.effect'
import { GetArticleEffect } from './store/effects/getArticle.effect'
import { StoreModule } from '@ngrx/store'
import { editArticleReducer } from './store/reducers'
import { ArticleService as SharedArticleService  } from '../shared/services/article.service'
import { LoadingModule } from '../shared/modules/loading/loading.module'

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
]

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', editArticleReducer),
    LoadingModule
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
