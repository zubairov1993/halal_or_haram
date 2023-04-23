import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { SharedService } from '../shared/shared.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor(public sharedService: SharedService,) { }

  ngOnInit() {
    this.sharedService.themeSubject$.subscribe(theme => {
      const main = document.getElementById('main') as HTMLInputElement
      main.classList.remove(main.classList[1])
      main.classList.add(theme)
    })
  }

}
