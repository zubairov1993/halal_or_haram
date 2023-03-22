import { Component, OnInit, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core'
import { nutritionalSupplements } from './interfaces/data'
import { TranslateService } from '@ngx-translate/core'
import { distinctUntilChanged } from 'rxjs'
import { Subject } from 'rxjs'

import { MainService } from '../../../../services/main.service'

import { NutritionalSupplementsInterface } from './interfaces/nutritional-supplements.interface'

@Component({
  selector: 'app-nutritional-supplements',
  templateUrl: './nutritional-supplements.component.html',
  styleUrls: ['./nutritional-supplements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NutritionalSupplementsComponent implements OnInit {
  displayedColumns: string[] = ['number', 'status', 'name' ]
  dataSource: NutritionalSupplementsInterface[] = []
  onSearch = new Subject<any>()

  sortingValue: string | null = null

  panelClass: string = 'select-light'

  statuses: string[] = [ 'ALL', 'HALAL', 'HARAM', 'MUSHBOOH' ]


  @HostListener('window:resize', ['$event']) onResize() {
    const table = document.getElementById('table_responsive')
    if (table) table.style.height = window.innerHeight - 120 + 'px'
  }

  constructor(
    public translateService: TranslateService,
    public mainService: MainService,
    public cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dataSource = nutritionalSupplements
    const table = document.getElementById('table_responsive')
    if (table) table.style.height = window.innerHeight - 120 + 'px'

    this.mainService.themeSubject$.subscribe(theme => {
      this.panelClass = theme === 'light' ? 'select-light' : 'select-dark'
      const del = theme === 'light' ? 'dark' : 'light'
      const table = document.getElementById('supplements__table') as HTMLInputElement
      table.classList.remove(del)
      table.classList.add(theme)
    })

    this.onSearch.pipe(distinctUntilChanged()).subscribe((event: any) => this.filterDataSource(event.target.value))
    this.cdr.detectChanges()
  }

  sortingDataSource(value: string) {
    if (value === 'ALL') this.dataSource = nutritionalSupplements
    else this.dataSource = nutritionalSupplements.filter((item: NutritionalSupplementsInterface) => item.status.includes(value))
    this.cdr.detectChanges()
  }

  filterDataSource(value: any) {
    value = value !== null ? value.toLowerCase() : value
    if (value !== null && value.length >= 1) {

      if (this.sortingValue === 'ALL') {
        this.dataSource = nutritionalSupplements.filter((item: NutritionalSupplementsInterface) => {
          return item.number.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
        })
      }

      if (this.sortingValue === 'HALAL') {
        const halalArray = nutritionalSupplements.filter(item => item.status === 'HALAL')
        this.dataSource = halalArray.filter((item: NutritionalSupplementsInterface) => {
          return item.number.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
        })
      }

      if (this.sortingValue === 'HARAM') {
        const haramArray = nutritionalSupplements.filter(item => item.status === 'HARAM')
        this.dataSource = haramArray.filter((item: NutritionalSupplementsInterface) => {
          return item.number.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
        })
      }

      if (this.sortingValue === 'MUSHBOOH') {
        const mushboohArray = nutritionalSupplements.filter(item => item.status === 'MUSHBOOH')
        this.dataSource = mushboohArray.filter((item: NutritionalSupplementsInterface) => {
          return item.number.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
        })
      }
    }

    if (value === '') {
      if (this.sortingValue === 'ALL') this.dataSource = nutritionalSupplements
      if (this.sortingValue === 'HALAL') this.dataSource = nutritionalSupplements.filter(item => item.status === 'HALAL')
      if (this.sortingValue === 'HARAM') this.dataSource = nutritionalSupplements.filter(item => item.status === 'HARAM')
      if (this.sortingValue === 'MUSHBOOH') this.dataSource = nutritionalSupplements.filter(item => item.status === 'MUSHBOOH')
    }
    this.cdr.detectChanges()
  }

  getClassColor(status: string): string {
    let color: string = ''
    if (status === 'HALAL') color = 'green'
    if (status === 'HARAM') color = 'red'
    if (status === 'MUSHBOOH') color = 'orange'
    return color
  }
}
