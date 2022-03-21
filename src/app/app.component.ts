import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tipPercentages = [
    5,
    10,
    15,
    25,
    50
  ];
}
