import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { enviroment } from 'src/enviroments/enviroment'
import { HttpClient } from '@angular/common/http'
import { IArticle } from 'src/app/shared/types/article.interface'
import { IGetArticleResponse } from 'src/app/shared/types/getArticleResponse.interface'

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  getUrl(slug: string) {
    return `${enviroment.apiUrl}/articles/${slug}/favorite`
  }

  getArticle(response: IGetArticleResponse): IArticle {
    return response.article
  }

  addToFavorites(slug: string): Observable<IArticle> {
    return this.http
      .post<IGetArticleResponse>(this.getUrl(slug), {})
      .pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<IArticle> {
    return this.http
      .delete<IGetArticleResponse>(this.getUrl(slug))
      .pipe(map(this.getArticle))
  }
}
