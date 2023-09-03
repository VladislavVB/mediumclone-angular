import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'

import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccesAction,
} from '../actions/editArticle.action'
import { EditArticleService } from '../../services/edit-article.service'
import { IArticle } from 'src/app/shared/types/article.interface'

@Injectable()
export class UpdateArticleEffect {
  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}

  updateArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateArticleAction),
      switchMap(({ articleInput, slug }) => {
        return this.editArticleService.uptadeArticle(slug, articleInput).pipe(
          map((article: IArticle) => {
            return updateArticleSuccesAction({ article })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              updateArticleFailureAction({ errors: errorResponse.error.errors })
            )
          )
        )
      })
    )
  })

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateArticleSuccesAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug])
        })
      ),
    {
      dispatch: false,
    }
  )
}
