import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  registerAction,
  registerFailureAction,
  registerSuccesAction,
} from '../actions/register.action'
import { catchError, map, of, switchMap } from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

@Injectable()
export class RegisterEffect {
  constructor(private actions$: Actions, private authServise: AuthService) {}

  rehister$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        console.log(11111)

        return this.authServise.register(request).pipe(
          map((currentUser: ICurrentUser) =>
            registerSuccesAction({ currentUser })
          ),
          catchError(() => {
            console.log(22)

            return of(registerFailureAction)
          })
        )
      })
    )
  })
}
