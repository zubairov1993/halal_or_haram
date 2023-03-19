import { RouterModule } from '@angular/router'
import { MatTableModule } from '@angular/material/table'
import { TranslateModule } from '@ngx-translate/core'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { NutritionalSupplementsComponent } from './nutritional-supplements.component'

@NgModule({
  declarations: [ NutritionalSupplementsComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      { path: '', component: NutritionalSupplementsComponent }
    ]),
  ],
  exports: [MatTableModule],
  providers: []
})
export class NutritionalSupplementsModule { }
