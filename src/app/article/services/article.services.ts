import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { enviroment } from 'src/enviroments/enviroment'

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  deliteArticle(slug: string): Observable<{}> {
    const url = `${enviroment.apiUrl}/articles/${slug}`

    return this.http.delete<{}>(url)
  }
}
