import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { loginAction } from 'src/app/auth/store/actions/login.action'
import {
  isSubmittingselector,
  valudationsErrorsSelector,
} from 'src/app/auth/store/selectors'
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface'
import {
  ILoginDataRequest,
  ILoginRequest,
} from 'src/app/auth/types/loginRequest.interface'
import { IAppState } from 'src/app/shared/types/appState.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<IBackendErrors | null>
  constructor(private store: Store<IAppState>) {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingselector))
    this.backendErrors$ = this.store.pipe(select(valudationsErrorsSelector))
  }
  form = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>(''),
  })

  onSubmit() {
    const request: ILoginRequest = {
      user: this.form.value as ILoginDataRequest,
    }
    this.store.dispatch(loginAction({ request }))
  }
}
