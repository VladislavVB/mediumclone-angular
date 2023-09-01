import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, Subscription, combineLatest, map } from 'rxjs'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { ActivatedRoute } from '@angular/router'
import { IArticle } from 'src/app/shared/types/article.interface'
import { getArticleAction } from '../../store/actions/getArticle.actions'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { deliteArticleAction } from '../../store/actions/deleteArticle.action'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  article: IArticle | null
  articleSubsciption: Subscription
  slug: string
  isAuthor: Observable<boolean>

  constructor(private store: Store<IAppState>, private route: ActivatedRoute) {}

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
  }

  initilazesListeners() {
    this.articleSubsciption = this.store
      .pipe(select(articleSelector))
      .subscribe((article: IArticle | null) => {
        this.article = article
      })
  }

  deleteArticle() {
    if (confirm('Drlete?'))
      this.store.dispatch(deliteArticleAction({ slug: this.slug }))
  }

  ngOnInit(): void {
    this.isAuthor = combineLatest([
      this.store.select(articleSelector),
      this.store.select(currentUserSelector),
    ]).pipe(
      map(([article, currentUser]: [IArticle | null, ICurrentUser | null]) => {
        if (!article || !currentUser) return false

        return currentUser.username === article.author.username
      })
    )

    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.initilazesListeners()

    this.fetchData()
  }

  ngOnDestroy(): void {
    this.articleSubsciption.unsubscribe()
  }
}
