import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { IAppState } from 'src/app/shared/types/appState.interface'
import { TPopularTag } from 'src/app/shared/types/popularTag.type'
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors'
import { getPopularTagsAction } from '../../store/actions/getPopularTags'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  popularTags$: Observable<TPopularTag[] | null>

  ngOnInit(): void {
    this.store.dispatch(getPopularTagsAction())

    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
  }
}
