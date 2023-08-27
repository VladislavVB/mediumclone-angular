import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { getCurrentUserAction } from './auth/store/actions/getCurrentUser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(getCurrentUserAction())
  }
}
