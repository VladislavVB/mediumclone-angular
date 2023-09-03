import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { IArticle } from 'src/app/shared/types/article.interface'
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccesAction,
} from '../actions/getArticle.action'

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
  ) {}

  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            console.log(article);
            
            return getArticleSuccesAction({ article })
          }),
          catchError(() => of(getArticleFailureAction()))
        )
      })
    )
  })
}
