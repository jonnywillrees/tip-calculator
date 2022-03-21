import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'atom-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit {
  @Input() id = '';
  @Input() name = '';
  @Input() value = '';
  @Input() placeholder = '';

  constructor() { }

  ngOnInit(): void {
  }

}
