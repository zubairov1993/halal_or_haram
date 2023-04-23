import { Component, OnInit, ChangeDetectionStrategy, HostListener, ChangeDetectorRef } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { distinctUntilChanged } from 'rxjs'
import { Subject } from 'rxjs'
import { MatDialog } from '@angular/material/dialog'

import { MainService } from '../../services/main.service'
import { FirebaseService } from '../../../shared/firebase.service'

import { AddItemComponent } from './components/add-item/add-item.component'

import { IItem } from './interfaces/registry.interface'
import { ShowItemComponent } from './components/show-item/show-item.component';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistryComponent implements OnInit {
  displayedColumns: string[] = ['additive', 'status', 'name' ]
  dataSource: IItem[] = []
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
    public cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private firebaseService: FirebaseService,
    public sharedService: SharedService,
  ) { }

  ngOnInit() {
    const table = document.getElementById('table_responsive')
    if (table) table.style.height = window.innerHeight - 120 + 'px'

    this.sharedService.themeSubject$.subscribe(theme => {
      this.panelClass = theme === 'light' ? 'select-light' : 'select-dark'
      const del = theme === 'light' ? 'dark' : 'light'
      const table = document.getElementById('additive__table') as HTMLInputElement
      table.classList.remove(del)
      table.classList.add(theme)
    })

    this.firebaseService.getAdditives().subscribe((response: IItem[]) => {
      this.firebaseService.countAddivities$.next(response.length)
      this.firebaseService.addivities$.next(response)
      this.dataSource = response
      console.log('this.dataSource', this.dataSource);
      this.cdr.detectChanges()
    })

    // this.onSearch.pipe(distinctUntilChanged()).subscribe((event: any) => this.filterDataSource(event.target.value))
    this.onSearch.pipe(distinctUntilChanged()).subscribe((event: any) => {
      console.log('event.target.value', event.target.value);
      if (event.target.value.length >= 3) {
        this.firebaseService.search(event.target.value).subscribe((response: IItem[]) => {
          // this.firebaseService.countAddivities$.next(response.length)
          // this.firebaseService.addivities$.next(response)
          // this.dataSource = response
          console.log('response', response);
          // this.cdr.detectChanges()
        })
      }
    })
    this.cdr.detectChanges()
  }

  sortingDataSource(value: string) {
    if (value === 'ALL') this.dataSource = this.firebaseService.addivities$.value
    else this.dataSource = this.firebaseService.addivities$.value.filter((item: IItem) => item.status.includes(value))
    this.cdr.detectChanges()
  }

  filterDataSource(value: string) {
    value = value !== null ? value.toLowerCase() : value

    const allArray = this.firebaseService.addivities$.value.filter(item => item.status === this.sortingValue || this.sortingValue === 'ALL')
    const filteredArray = allArray.filter((item: IItem) => {
      return item.additive?.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
    })

    switch (this.sortingValue) {
      case 'HALAL':
        this.dataSource = filteredArray.filter(item => item.status === 'HALAL')
        break;
      case 'HARAM':
        this.dataSource = filteredArray.filter(item => item.status === 'HARAM')
        break;
      case 'MUSHBOOH':
        this.dataSource = filteredArray.filter(item => item.status === 'MUSHBOOH')
        break;
      default:
        this.dataSource = filteredArray;
        break;
    }

    if (value === '') {
      switch (this.sortingValue) {
        case 'HALAL':
          this.dataSource = this.firebaseService.addivities$.value.filter(item => item.status === 'HALAL')
          break;
        case 'HARAM':
          this.dataSource = this.firebaseService.addivities$.value.filter(item => item.status === 'HARAM')
          break;
        case 'MUSHBOOH':
          this.dataSource = this.firebaseService.addivities$.value.filter(item => item.status === 'MUSHBOOH')
          break;
        default:
          this.dataSource = this.firebaseService.addivities$.value
          break;
      }
    }

    this.cdr.detectChanges()
  }

  // filterDataSource(value: any) {
  //   value = value !== null ? value.toLowerCase() : value
  //   if (value !== null && value.length >= 1) {

  //     if (this.sortingValue === 'ALL') {
  //       this.dataSource = this.firebaseService.addivities$.value.filter((item: IItem) => {
  //         return item.additive?.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
  //       })
  //     }

  //     if (this.sortingValue === 'HALAL') {
  //       const halalArray = this.firebaseService.addivities$.value.filter(item => item.status === 'HALAL')
  //       this.dataSource = halalArray.filter((item: IItem) => {
  //         return item.additive?.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
  //       })
  //     }

  //     if (this.sortingValue === 'HARAM') {
  //       const haramArray = this.firebaseService.addivities$.value.filter(item => item.status === 'HARAM')
  //       this.dataSource = haramArray.filter((item: IItem) => {
  //         return item.additive?.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
  //       })
  //     }

  //     if (this.sortingValue === 'MUSHBOOH') {
  //       const mushboohArray = this.firebaseService.addivities$.value.filter(item => item.status === 'MUSHBOOH')
  //       this.dataSource = mushboohArray.filter((item: IItem) => {
  //         return item.additive?.toLowerCase().includes(value) || item.namerus.toLowerCase().includes(value) || item.namelat.toLowerCase().includes(value)
  //       })
  //     }
  //   }

  //   if (value === '') {
  //     if (this.sortingValue === 'ALL') this.dataSource = this.firebaseService.addivities$.value
  //     if (this.sortingValue === 'HALAL') this.dataSource = this.firebaseService.addivities$.value.filter(item => item.status === 'HALAL')
  //     if (this.sortingValue === 'HARAM') this.dataSource = this.firebaseService.addivities$.value.filter(item => item.status === 'HARAM')
  //     if (this.sortingValue === 'MUSHBOOH') this.dataSource = this.firebaseService.addivities$.value.filter(item => item.status === 'MUSHBOOH')
  //   }
  //   this.cdr.detectChanges()
  // }

  addItem() {
    const dialogRef = this.dialog.open(AddItemComponent, {
    });
  }

  showItem(item: IItem) {
    console.log('item', item);

    // getAdditiveById

    this.firebaseService.getAdditiveById(item.id).subscribe((response: any) => {
      // this.firebaseService.countAddivities$.next(response.length)
      // this.firebaseService.addivities$.next(response)
      // this.dataSource = response
      console.log('response', response);
      // this.cdr.detectChanges()
    })
    // const dialogRef = this.dialog.open(ShowItemComponent, {
    //   data: item
    // });
  }
}
