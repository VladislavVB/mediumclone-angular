import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { ArticleService } from '../../services/article.services'
import {
  deliteArticleAction,
  deliteArticleFailureAction,
  deliteArticleSuccesAction,
} from '../actions/deleteArticle.action'

@Injectable()
export class DeleteArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: ArticleService
  ) {}

  deliteArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deliteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deliteArticle(slug).pipe(
          map(() => deliteArticleSuccesAction()),
          catchError(() => of(deliteArticleFailureAction()))
        )
      })
    )
  })
}
