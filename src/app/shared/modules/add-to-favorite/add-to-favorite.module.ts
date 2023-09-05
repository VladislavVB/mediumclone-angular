import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddToFavoriteComponent } from './components/add-to-favorite/add-to-favorite.component'
import { AddToFavoritesService } from './services/addToFavorites.services'
import { EffectsModule } from '@ngrx/effects'
import { AddToFavoriteEffect } from './store/effects/addToFavorite.effect'

@NgModule({
  declarations: [AddToFavoriteComponent],
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoriteEffect])],
  exports: [AddToFavoriteComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoriteModule {}
