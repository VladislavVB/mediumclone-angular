import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { tap } from 'rxjs'
import { logoutAction } from '../actions/sync.action'
import { PersisanseService } from 'src/app/shared/services/persistans.service'
import { Router } from '@angular/router'

@Injectable()
export class LogoutEffect {
  constructor(
    private actions$: Actions,
    private persisanseService: PersisanseService,
    private router: Router
  ) {}

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.persisanseService.set('accessToken', '')
          this.router.navigateByUrl('/')
        })
      ),
    {
      dispatch: false,
    }
  )
}
