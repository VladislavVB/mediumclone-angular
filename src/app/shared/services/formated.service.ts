import { Injectable } from '@angular/core'

@Injectable()
export class FormatedService {
  dateRu(date: string): string {
    return new Date(date).toLocaleDateString('RU-ru')
  }
}
