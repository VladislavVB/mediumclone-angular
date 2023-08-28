import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IGetFeedResponse } from '../types/getFeedResponse.interface'
import { enviroment } from 'src/enviroments/enviroment'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<IGetFeedResponse> {
    const fullUrl = enviroment.apiUrl + url

    return this.http.get<IGetFeedResponse>(fullUrl)
  }
}
