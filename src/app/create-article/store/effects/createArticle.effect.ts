import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccesAction,
} from '../actions/createArticle.action'
import { CreateArticleService } from '../../services/create-article.service'
import { IArticle } from 'src/app/shared/types/article.interface'

@Injectable()
export class CreateArticleEffect {
  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}

  createArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createArticleAction),
      switchMap(({ articleInput }) => {
        return this.createArticleService.createArticle(articleInput).pipe(
          map((article: IArticle) => {
            return createArticleSuccesAction({ article })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              createArticleFailureAction({ errors: errorResponse.error.errors })
            )
          )
        )
      })
    )
  })

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createArticleSuccesAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    {
      dispatch: false,
    }
  )
}
