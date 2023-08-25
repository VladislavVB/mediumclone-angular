import { Injectable } from '@angular/core'

@Injectable()
export class PersisanseService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('Error saving to LocalStorage', error)
    }
  }
  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}')
    } catch (error) {
      console.error('Error getting from LocalStorage', error)
      return null
    }
  }
}
