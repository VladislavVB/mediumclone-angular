import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { PopularTagsService } from '../../services/popularTags.service'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccesAction,
} from '../actions/getPopularTags'
import { TPopularTag } from 'src/app/shared/types/popularTag.type'

@Injectable()
export class GetPopularTagsEffect {
  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}

  getPopularTags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: TPopularTag[]) => {
            return getPopularTagsSuccesAction({ popularTags })
          }),
          catchError(() => of(getPopularTagsFailureAction()))
        )
      })
    )
  })
}
