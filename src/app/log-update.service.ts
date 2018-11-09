import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwService {
  isUpdateAvailable = false;

  constructor(private updates: SwUpdate) {}

  activate() {
    if (!this.updates.isEnabled) {
      return;
    }
    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      this.isUpdateAvailable = true;
      // const snackBarRef = this.snackBar.open('Update available', 'Update');
      // snackBarRef.afterDismissed().subscribe(e => {
      //   console.log('The snack-bar was dismissed', e);
      //   this.update();
      // });
    });
    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
    interval(6 * 60 * 60).subscribe(() => {
      console.log('checking for updates', this.updates.isEnabled);
      this.updates.checkForUpdate();
    });
  }

  update() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
