import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

import { SharedService } from '../../../shared/shared.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    public sharedService: SharedService,
  ) { }

  ngOnInit() {
  }

  changeTheme(theme: string) {
    this.sharedService.themeSubject$.next(theme)
  }

  changeLanguage() {
    const lang = this.translateService.currentLang === 'ru' ? 'en' : 'ru'
    this.translateService.use(lang)
  }

}
