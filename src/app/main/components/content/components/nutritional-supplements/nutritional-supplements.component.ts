import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core'
import { nutritionalSupplements } from './interfaces/data'
import { TranslateService } from '@ngx-translate/core'

import { MainService } from '../../../../services/main.service'

import { NutritionalSupplementsInterface } from './interfaces/nutritional-supplements.interface'

@Component({
  selector: 'app-nutritional-supplements',
  templateUrl: './nutritional-supplements.component.html',
  styleUrls: ['./nutritional-supplements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NutritionalSupplementsComponent implements OnInit {
  displayedColumns: string[] = ['number', 'status', 'name' ];
  dataSource: NutritionalSupplementsInterface[] = []

  @HostListener('window:resize', ['$event']) onResize() {
    const table = document.getElementById('table_responsive')
    if (table) table.style.height = window.innerHeight - 100 + 'px'
  }

  constructor(public translateService: TranslateService, public mainService: MainService) { }

  ngOnInit() {
    this.dataSource = nutritionalSupplements
    const table = document.getElementById('table_responsive')
    if (table) table.style.height = window.innerHeight - 100 + 'px'

    this.mainService.themeSubject$.subscribe(theme => {
      const del = theme === 'light' ? 'dark' : 'light'
      const table = document.getElementById('supplements__table') as HTMLInputElement
      table.classList.remove(del);
      table.classList.add(theme);
    })
  }

  search(value: string) {

  }

  getClassColor(status: string): string {
    let color: string = ''
    if (status === 'HALAL') color = 'green'
    if (status === 'HARAM') color = 'red'
    if (status === 'MUSHBOOH') color = 'orange'
    return color
  }
}
