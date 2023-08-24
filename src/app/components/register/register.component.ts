import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { registerAction } from 'src/app/auth/store/actions/register.action'
import { isSubmittingselector } from 'src/app/auth/store/selectors/selectors'
import {
  IRegisterDataRequest,
  IRegisterRequest,
} from 'src/app/auth/types/registerRequest.interface'
import { IAppState } from 'src/app/shared/types/appState.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSubmitting$: Observable<boolean>
  constructor(private store: Store<IAppState>) {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingselector))
  }
  form = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>(''),
  })

  onSubmit() {
    const request: IRegisterRequest = {
      user: this.form.value as IRegisterDataRequest,
    }
    this.store.dispatch(registerAction({ request }))
  }

  ngOnInit(): void {
    console.log(this.form.value)
  }
}
