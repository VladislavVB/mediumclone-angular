import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable, Subscription, filter } from 'rxjs'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { isSubmittingselector } from '../../store/selectors'
import { updateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser'
import { ICurrentUserInput } from 'src/app/shared/types/currentUserInput.interface'
import { logoutAction } from 'src/app/auth/store/actions/sync.action'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  isSubmiting$: Observable<boolean>
  backendErrors$: Observable<IBackendErrors | null>
  currentUser: ICurrentUser
  currentUserSubscription: Subscription
  form: FormGroup

  initForm() {
    this.form = new FormGroup({
      image: new FormControl<string>(this.currentUser.image),
      username: new FormControl<string>(this.currentUser.username),
      bio: new FormControl<string>(this.currentUser.bio),
      email: new FormControl<string>(this.currentUser.email),
      password: new FormControl<string>(''),
    })
  }

  initValue() {
    this.isSubmiting$ = this.store.pipe(select(isSubmittingselector))
  }

  submit() {
    const currentUserInput: ICurrentUserInput = {
      ...this.currentUser,
      ...this.form.value,
    }
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }))
  }

  logout() {
    this.store.dispatch(logoutAction())
  }

  initalizeListeners() {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: ICurrentUser) => {
        this.currentUser = currentUser
        this.initForm()
      })
  }

  ngOnInit(): void {
    this.initValue()
    this.initalizeListeners()
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe()
  }
}
