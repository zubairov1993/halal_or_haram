import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class SharedService {
  themeSubject$ = new BehaviorSubject<string>('dark')

  constructor() {}

  getClassColor(status: string): string {
    let color: string = ''
    if (status === 'HALAL') color = 'green'
    if (status === 'HARAM') color = 'red'
    if (status === 'MUSHBOOH') color = 'orange'
    return color
  }
}
