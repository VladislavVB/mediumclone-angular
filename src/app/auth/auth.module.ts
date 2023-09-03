import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from 'src/app/auth/components/login/login.component'
import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { StoreModule } from '@ngrx/store'
import { authReducer } from './store/reducers'
import { AuthService } from './services/auth.service'
import { EffectsModule } from '@ngrx/effects'
import { RegisterEffect } from './store/effects/register.effect'
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module'
import { PersisanseService } from '../shared/services/persistans.service'
import { LoginEffect } from './store/effects/login.effect'
import { GetCurrentUserEffect } from './store/effects/getCurrentUser.effect'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthIntercetor } from '../shared/services/authInterceptor.service'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    EffectsModule.forRoot([]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [
    AuthService,
    PersisanseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercetor,
      multi: true,
    },
  ],
})
export class AuthModule {}
