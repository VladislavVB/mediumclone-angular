import { Injectable } from '@angular/core'
import { IRegisterRequest } from '../types/registerRequest.interface'
import { Observable, map } from 'rxjs'
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface'
import { HttpClient } from '@angular/common/http'
import { enviroment } from 'src/enviroments/enviroment'
import { IAuthResponse } from '../types/authResponse.interface'
import { ILoginRequest } from '../types/loginRequest.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user
  }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = enviroment.apiUrl + '/users'
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser))
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = enviroment.apiUrl + '/users/login'
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser))
  }
}
