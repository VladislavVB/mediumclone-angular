import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import {
  currentUserSelector,
  isAnonymousInSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggenIn$: Observable<boolean | null>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<ICurrentUser | null>

  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    this.isLoggenIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousInSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
