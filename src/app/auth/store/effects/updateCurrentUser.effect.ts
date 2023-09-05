import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction,
} from '../actions/updateCurrentUser'
import { HttpErrorResponse } from '@angular/common/http'

@Injectable()
export class updateCurrentUserEffect {
  constructor(private actions$: Actions, private authServise: AuthService) {}

  updateCurrentUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authServise.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: ICurrentUser) => {
            return updateCurrentUserSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              updateCurrentUserFailureAction({
                errors: errorResponse.error.erros,
              })
            )
          )
        )
      })
    )
  })
}
