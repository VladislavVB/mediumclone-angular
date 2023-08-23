import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from 'src/app/components/login/login.component'
import { RegisterComponent } from 'src/app/components/register/register.component'
import { StoreModule } from '@ngrx/store'
import { authReducer } from './store/reducers'

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
  ],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule {}