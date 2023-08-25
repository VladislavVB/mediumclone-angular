import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { PersisanseService } from 'src/app/shared/services/persistans.service'
import { Router } from '@angular/router'
import {
  loginAction,
  loginFailureAction,
  loginSuccesAction,
} from '../actions/login.action'

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authServise: AuthService,
    private persisanseService: PersisanseService,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authServise.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persisanseService.set('accessToken', currentUser.token)
            return loginSuccesAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(loginFailureAction({ errors: errorResponse.error.errors }))
          )
        )
      })
    )
  })

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccesAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {
      dispatch: false,
    }
  )
}
