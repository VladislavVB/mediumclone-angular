import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccesAction,
} from '../actions/getArticle.actions'
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service'
import { IArticle } from 'src/app/shared/types/article.interface'
import { deliteArticleSuccesAction } from '../actions/deleteArticle.action'
import { Router } from '@angular/router'

@Injectable()
export class GetArticleEffect {
  constructor(
    private router: Router,
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) {}

  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccesAction({ article })
          }),
          catchError(() => of(getArticleFailureAction()))
        )
      })
    )
  })

  redirectAfterDelete = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(deliteArticleSuccesAction),
        tap(() => this.router.navigate(['/']))
      )
    },
    { dispatch: false }
  )
}
