import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'

import { UserProfileServices } from '../../services/user-profile.service'
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from '../actions/getUserProfile.action'
import { IProfile } from 'src/app/shared/types/profile.interface'

@Injectable()
export class GetUserProfileEffect {
  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileServices
  ) {}

  getUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({ slug }) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: IProfile) => {
            return getUserProfileSuccessAction({ userProfile })
          }),
          catchError(() => of(getUserProfileFailureAction()))
        )
      })
    )
  })
}
