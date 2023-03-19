import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { MainService } from './services/main.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit() {
    this.mainService.themeSubject$.subscribe(theme => {
      const main = document.getElementById('main') as HTMLInputElement
      main.classList.remove(main.classList[1]);
      main.classList.add(theme);
    })
  }

}
