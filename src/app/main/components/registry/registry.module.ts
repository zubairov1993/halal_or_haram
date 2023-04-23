import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { SharedModule } from '../../../shared/shared.module'

import { RegistryComponent } from './registry.component';
import { AddItemComponent } from './components/add-item/add-item.component'
import { ShowItemComponent } from './components/show-item/show-item.component';

@NgModule({
  declarations: [ RegistryComponent, AddItemComponent, ShowItemComponent ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: RegistryComponent }
    ]),
  ],
  exports: [],
  providers: []
})
export class RegistryModule { }
