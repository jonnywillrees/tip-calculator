import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'atom-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input() percentage = 0;
  tipPercentages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tipPercentages = [
      5,
      10,
      15,
      25,
      50
    ];
  }

}
