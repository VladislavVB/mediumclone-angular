import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface'
import {
  IArticleFormInput,
  IArticleInput,
} from 'src/app/shared/types/articleInput.interface'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initailValues') initailValuesProps: IArticleInput
  @Input('isSubmiting') isSubmitingProps: boolean
  @Input('errors') errorsProps: IBackendErrors | null

  @Output('articleSubmiting') articleSubmitingEvent =
    new EventEmitter<IArticleInput>()

  form: FormGroup

  onSubmit() {
    this.articleSubmitingEvent.emit(this.form.value as IArticleInput)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.initailValuesProps.title),
      description: new FormControl<string>(this.initailValuesProps.description),
      body: new FormControl<string>(this.initailValuesProps.body),
      tagList: new FormControl<string>(
        this.initailValuesProps.tagList.join(' ')
      ),
    })
  }
}
