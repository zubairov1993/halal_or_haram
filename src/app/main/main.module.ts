import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { MainComponent } from './main.component'
import { HeaderComponent } from './components/header/header.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainComponent, children: [
          { path: 'content', loadChildren: () => import('./components/content/content.module').then(m => m.ContentModule) },
        ]
      }
    ])
  ],
  providers: []
})
export class MainModule { }

