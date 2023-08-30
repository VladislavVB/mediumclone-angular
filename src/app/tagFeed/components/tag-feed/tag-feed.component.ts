import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  apiUrl: string
  tagName: string

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      
      this.tagName = params['slug']
      this.apiUrl = `/articles?tag=${params}`
    })
  }
}
