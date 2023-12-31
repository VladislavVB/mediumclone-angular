import { Injectable } from '@angular/core'

@Injectable()
export class UtilsService {
  range(start: number = 1, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start)
  }
}
