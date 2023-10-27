import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddToFollowComponent } from './componets/add-to-follow/add-to-follow.component'
import { AddToFollowService } from './services/addToFollow.services'
import { EffectsModule } from '@ngrx/effects'
import { AddToFollowEffect } from './store/effects/addToFollow.effect'

@NgModule({
  declarations: [AddToFollowComponent],
  imports: [CommonModule,  EffectsModule.forFeature([AddToFollowEffect])],
  exports: [AddToFollowComponent],
  providers: [AddToFollowService],
})
export class AddToFollowModule {}
