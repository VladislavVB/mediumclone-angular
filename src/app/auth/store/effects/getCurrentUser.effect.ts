import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { PersisanseService } from 'src/app/shared/services/persistans.service'

import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccesAction,
} from '../actions/getCurrentUser'

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private actions$: Actions,
    private authServise: AuthService,
    private persisanseService: PersisanseService
  ) {}

  getCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persisanseService.get('accessToken')
        if (!token) return of(getCurrentUserFailureAction())
        return this.authServise.getCurrentUser().pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccesAction({ currentUser })
          }),
          catchError(() => of(getCurrentUserFailureAction()))
        )
      })
    )
  })
}
