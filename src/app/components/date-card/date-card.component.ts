import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-card',
  templateUrl: './date-card.component.html',
  styleUrls: ['./date-card.component.scss'],
})
export class DateCardComponent  implements OnInit {

  @Input() day : number;
  @Input() month : string;
  @Input() places : string;

  constructor() { }

  ngOnInit() {}



}
