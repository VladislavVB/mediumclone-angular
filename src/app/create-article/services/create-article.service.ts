import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { IArticle } from 'src/app/shared/types/article.interface'
import { IArticleInput } from 'src/app/shared/types/articleInput.interface'
import { ISaveArticleResponse } from 'src/app/shared/types/saveArticleResponse.interface'
import { enviroment } from 'src/enviroments/enviroment'

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(articleInput: IArticleInput): Observable<IArticle> {
    const fullUrl = enviroment.apiUrl + '/articles'
    return this.http
      .post<ISaveArticleResponse>(fullUrl, { article: articleInput })
      .pipe(map((res: ISaveArticleResponse) => res.article))
  }
}
