import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ContentComponent } from './content.component'

@NgModule({
  declarations: [ ContentComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ContentComponent, children: [
          { path: 'supplements', loadChildren: () => import('./components/nutritional-supplements/nutritional-supplements.module').then(m => m.NutritionalSupplementsModule) },
        ]
      }
    ]),
  ],
  providers: []
})
export class ContentModule { }

