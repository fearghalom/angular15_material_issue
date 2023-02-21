import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  matButtonSpinnerEnabled = false;
  simpleButtonSpinnerEnabled = false;

  onMatButtonClick(): void {
    this.matButtonSpinnerEnabled = !this.matButtonSpinnerEnabled;
  }

  onSimpleButtonClick(): void {
    this.simpleButtonSpinnerEnabled = !this.simpleButtonSpinnerEnabled;
  }
}
