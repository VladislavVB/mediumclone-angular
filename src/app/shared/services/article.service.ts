import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { enviroment } from 'src/enviroments/enviroment'
import { HttpClient } from '@angular/common/http'
import { IGetArticleResponse } from '../types/getArticleResponse.interface'
import { IArticle } from '../types/article.interface'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl = enviroment.apiUrl + '/articles/' + slug

    return this.http
      .get<IGetArticleResponse>(fullUrl)
      .pipe(map((response: IGetArticleResponse) => response.article))
  }
}
