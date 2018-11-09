import { Component } from '@angular/core';
import { SwService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swBaseHrefBug';
  // constructor(public sw: SwService) {
  //   sw.activate();
  // }
}
