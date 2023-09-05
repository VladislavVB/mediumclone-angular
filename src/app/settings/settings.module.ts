import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SettingsComponent } from './components/settings/settings.component'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { settingsReducer } from './store/reducers'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module'

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
]

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', settingsReducer),
    BackendErrorMessagesModule,
  ],
})
export class SettingsModule {}
