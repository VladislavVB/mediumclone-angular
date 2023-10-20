import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, map } from 'rxjs'
import { IProfile } from 'src/app/shared/types/profile.interface'
import { enviroment } from 'src/enviroments/enviroment'
import { IGetUserProfileResponse } from '../types/getUserProfileResponse.interface'

@Injectable()
export class UserProfileServices {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<IProfile> {
    const url = `${enviroment.apiUrl}/profiles/${slug}`
    return this.http
      .get(url)
      .pipe(map((response: IGetUserProfileResponse) => response.profile))
  }
}
