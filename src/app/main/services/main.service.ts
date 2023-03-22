import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: "root" })
export class MainService {
  themeSubject$ = new BehaviorSubject<string>('dark')

  constructor() {}
}
