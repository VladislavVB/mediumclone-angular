import { Component, Input, OnInit } from '@angular/core'
import { UtilsService } from 'src/app/shared/services/utils.service'
import { enviroment } from 'src/enviroments/enviroment'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps?: number
  @Input('limit') limitProps: number = enviroment.limit
  @Input('currentPage') currentPageProps: number = 1
  @Input('url') urlProps: string

  constructor(private utilsService: UtilsService) {}

  pagesCount: number
  pages: number[]

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
