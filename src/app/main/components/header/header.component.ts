import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { MainService } from '../../services/main.service'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(public mainService: MainService, private translateService: TranslateService) { }

  ngOnInit() {
  }

  changeTheme(theme: string) {
    this.mainService.themeSubject$.next(theme)
  }

  changeLanguage() {
    const lang = this.translateService.currentLang === 'ru' ? 'en' : 'ru'
    this.translateService.use(lang)
  }

}
