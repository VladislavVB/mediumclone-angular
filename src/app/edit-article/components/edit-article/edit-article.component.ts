import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, filter, map } from 'rxjs'
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface'
import { IArticleInput } from 'src/app/shared/types/articleInput.interface'
import {
  articleSelector,
  isLoadingSelector,
  isSubmittingselector,
  valudationsErrorsSelector,
} from '../../store/selectors'
import { ActivatedRoute } from '@angular/router'
import { getArticleAction } from '../../store/actions/getArticle.action'
import { createArticleAction } from 'src/app/create-article/store/actions/createArticle.action'
import { IArticle } from 'src/app/shared/types/article.interface'

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  initialValues$: Observable<IArticleInput>
  slug: string
  isLoading$: Observable<boolean>
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<IBackendErrors>

  onSubmit(articleInput: IArticleInput) {
    this.store.dispatch(createArticleAction({ articleInput }))
  }

  fetchData() {
    this.store.dispatch(getArticleAction({ slug: this.slug }))
    console.log(1);
    console.log(this.store);
    
    
  }

  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingselector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.backendErrors$ = this.store.pipe(select(valudationsErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: IArticle) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        }
      })
    )
  }

  ngOnInit(): void {
    this.initialValues()
    this.fetchData()

  }
}
