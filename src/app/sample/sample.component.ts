import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  constructor(@Inject(DOCUMENT) private _document: Document) {}

  changeLang(lang) {
    const data = this._document.location.href.split('/');
    data[3] = lang;
    this._document.location.href = data.join('/');
  }
}
