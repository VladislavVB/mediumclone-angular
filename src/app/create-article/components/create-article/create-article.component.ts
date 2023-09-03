import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface'
import { IArticleInput } from 'src/app/shared/types/articleInput.interface'
import {
  isSubmittingselector,
  valudationsErrorsSelector,
} from '../../store/selectors'
import { createArticleAction } from '../../store/actions/createArticle.action'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  constructor(private store: Store) {}

  initialValues: IArticleInput = {
    title: '',
    body: '',
    description: '',
    tagList: [],
  }

  isSubmitting$: Observable<boolean>
  backenderrors$: Observable<IBackendErrors>

  onSubmit(articleInput: IArticleInput) {
    this.store.dispatch(createArticleAction({ articleInput }))
  }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingselector))
    this.backenderrors$ = this.store.pipe(select(valudationsErrorsSelector))
  }
}
