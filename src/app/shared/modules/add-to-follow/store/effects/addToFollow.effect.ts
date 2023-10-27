import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import {
  addToFollowAction,
  addToFollowFailureAction,
  addToFollowSuccessAction,
} from '../actions/addToFollow.action'
import { AddToFollowService } from '../../services/addToFollow.services'
import { IProfile } from 'src/app/shared/types/profile.interface'

@Injectable()
export class AddToFollowEffect {
  constructor(
    private actions$: Actions,
    private addToFollowService: AddToFollowService
  ) {}

  addToFollow$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addToFollowAction),
      switchMap(({ isFollow, slug }) => {
        const profile$ = isFollow
          ? this.addToFollowService.removeFromFollow(slug)
          : this.addToFollowService.addToFollow(slug)
        return profile$.pipe(
          map((profile: IProfile) => {
            return addToFollowSuccessAction({ profile })
          }),
          catchError(() => of(addToFollowFailureAction()))
        )
      })
    )
  })
}
