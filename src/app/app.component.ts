import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enabled = false;

  onClick(): void {
    this.enabled = !this.enabled;
  }
}
