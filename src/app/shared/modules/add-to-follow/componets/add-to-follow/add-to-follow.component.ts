import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { addToFollowAction } from '../../store/actions/addToFollow.action'

@Component({
  selector: 'app-add-to-follow',
  templateUrl: './add-to-follow.component.html',
  styleUrls: ['./add-to-follow.component.scss'],
})
export class AddToFollowComponent implements OnInit {
  @Input('isFollow') isFollowProps: boolean
  @Input('username') usernameProps: string

  constructor(private store: Store) {}

  isFollow: boolean
  username: string

  handleFollow() {
    this.store.dispatch(
      addToFollowAction({
        isFollow: this.isFollow,
        slug: this.username,
      })
    )

    this.isFollow = !this.isFollow
  }

  ngOnInit(): void {
    this.isFollow = this.isFollowProps
    this.username = this.usernameProps
  }
}
