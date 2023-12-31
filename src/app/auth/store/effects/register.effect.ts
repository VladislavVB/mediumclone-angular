import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  registerAction,
  registerFailureAction,
  registerSuccesAction,
} from '../actions/register.action'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { HttpErrorResponse } from '@angular/common/http'
import { PersisanseService } from 'src/app/shared/services/persistans.service'
import { Router } from '@angular/router'

@Injectable()
export class RegisterEffect {
  constructor(
    private actions$: Actions,
    private authServise: AuthService,
    private persisanseService: PersisanseService,
    private router: Router
  ) {}

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authServise.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persisanseService.set('accessToken', currentUser.token)
            return registerSuccesAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailureAction({ errors: errorResponse.error.errors }))
          )
        )
      })
    )
  })

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccesAction),
      tap(() => {
        this.router.navigateByUrl('/')
      })
    ),
    {
      dispatch: false
    }
  )
}
