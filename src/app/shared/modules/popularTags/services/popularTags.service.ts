import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { enviroment } from 'src/enviroments/enviroment'
import { HttpClient } from '@angular/common/http'
import { IPopularTagsResponse } from '../types/getPopularTagsResponse.interface'
import { TPopularTag } from 'src/app/shared/types/popularTag.type'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<TPopularTag[]> {
    const fullUrl = enviroment.apiUrl + '/tags'

    return this.http.get(fullUrl).pipe(
      map((response: IPopularTagsResponse) => {
        return response.tags
      })
    )
  }
}
