import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFavoritesAction } from '../../store/actions/addToFavorites.action'

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.scss'],
})
export class AddToFavoriteComponent implements OnInit {
  @Input('isFavotire') isFavotireProps: boolean
  @Input('articleSlug') articleSlugProps: string
  @Input('favoritesCount') favoritesCountProps: number

  constructor(private store: Store) {}

  favoritesCount: number
  isFavorited: boolean

  handleLike() {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      })
    )
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1
    } else {
      this.favoritesCount = this.favoritesCount + 1
    }
    this.isFavorited = !this.isFavorited
  }

  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps
    this.isFavorited = this.isFavotireProps
  }
}
