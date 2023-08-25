import { Component, Input, OnInit } from '@angular/core'
import { IBackendErrors } from 'src/app/auth/types/backendErrors.interface'

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: IBackendErrors | null

  errorMessages: any

  ngOnInit(): void {
    this.errorMessages = this.backendErrorsProps
    console.log(this.errorMessages)

    if (this.backendErrorsProps)
      this.errorMessages = Object.keys(this.backendErrorsProps).map(
        (name: string) => {
          if (this.backendErrorsProps) {
            const messages = this.backendErrorsProps[name].join(', ')
            return `${name} ${messages}`
          }
          return null
        }
      )
  }
}
