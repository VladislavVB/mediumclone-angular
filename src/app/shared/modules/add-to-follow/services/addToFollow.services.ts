import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { enviroment } from 'src/enviroments/enviroment'
import { HttpClient } from '@angular/common/http'
import { IProfile } from 'src/app/shared/types/profile.interface'
import { IGetProfileResponse } from 'src/app/shared/types/getProfileResponse.interface'

@Injectable()
export class AddToFollowService {
  constructor(private http: HttpClient) {}

  getUrl(slug: string) {
    return `${enviroment.apiUrl}/profiles/${slug}/follow`
  }

  getProfile(response: IGetProfileResponse): IProfile {
    return response.profile
  }

  addToFollow(slug: string): Observable<IProfile> {
    return this.http
      .post<IGetProfileResponse>(this.getUrl(slug), {})
      .pipe(map(this.getProfile))
  }

  removeFromFollow(slug: string): Observable<IProfile> {
    return this.http
      .delete<IGetProfileResponse>(this.getUrl(slug))
      .pipe(map(this.getProfile))
  }
}
