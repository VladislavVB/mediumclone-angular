import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null

  constructor(private store: Store) {}

  isLoggedIn$: Observable<boolean>

  ngOnInit(): void {
      this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
