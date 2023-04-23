import { NgModule } from '@angular/core'
import { AuthComponent } from './auth.component'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ AuthComponent ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: AuthComponent }
    ])
  ],
  exports: [],
  providers: []
})
export class AuthModule { }
