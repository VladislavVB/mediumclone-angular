import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Store, select } from '@ngrx/store'
import { getFeedAction } from '../../store/actions/getFeed.actions'
import { Observable, Subscription } from 'rxjs'
import { IGetFeedResponse } from '../../types/getFeedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { enviroment } from 'src/enviroments/enviroment'
import { parseUrl, stringify } from 'query-string'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<IGetFeedResponse | null>
  baseUrl: string
  currentPage: number
  queryParamsSubscription: Subscription

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  fetchFeed(): void {
    const offset = this.currentPage * enviroment.limit - enviroment.limit
    const parsedUrl = parseUrl(this.apiUrlProps)

    const stringifiedParams = stringify({
      limit: enviroment.limit,
      offset,
      ...parsedUrl['slug'],
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]

    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1')
        this.fetchFeed()
      }
    )

    this.route.params.subscribe((params: Params) => {
      if (params['slug']) this.fetchFeed()
    })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }
}
