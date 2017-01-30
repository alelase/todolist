import { Component } from '@angular/core';

@Component({
  selector: 'hpe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag = false;
  title = 'hpe works!';

  constructor() {
    setTimeout(() => this.flag = true, 3000);
  }
}
