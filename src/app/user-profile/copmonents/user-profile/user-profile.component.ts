import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, Subscription, combineLatest, filter, map } from 'rxjs'
import { IProfile } from 'src/app/shared/types/profile.interface'
import { getUserProfileAction } from '../../store/actions/getUserProfile.action'
import { ActivatedRoute, Params, Router } from '@angular/router'
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../../store/selectors'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: IProfile
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSubscription: Subscription
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(
    private router: Router,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    // this.apiUrl = isFavorites
    //   ? `/articles?favorited=${this.slug}`
    //   : `/articles?author=${this.slug}`

    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(([currentUser, userProfile]: [ICurrentUser, IProfile]) => {
        return currentUser.username === userProfile.username
      })
    )
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    return (this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`)
  }

  initializeListeners() {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: IProfile) => (this.userProfile = userProfile))

    this.route.params.subscribe(() => {
      this.slug = this.route.snapshot.paramMap.get('slug')
      this.fetchData()
    })
  }

  fetchData() {
    console.log(111)
    console.log(this.slug)

    this.store.dispatch(getUserProfileAction({ slug: this.slug }))
  }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    // this.fetchData()
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe()
  }
}
