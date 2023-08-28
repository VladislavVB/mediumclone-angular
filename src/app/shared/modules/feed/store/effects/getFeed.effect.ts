import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { FeedService } from '../../services/feed.service'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccesAction,
} from '../actions/getFeed.actions'
import { IGetFeedResponse } from '../../types/getFeedResponse.interface'

@Injectable()
export class GetFeedEffect {
  constructor(private actions$: Actions, private feedService: FeedService) {}

  getFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: IGetFeedResponse) => {
            return getFeedSuccesAction({ feed })
          }),
          catchError(() => of(getFeedFailureAction()))
        )
      })
    )
  })
}
