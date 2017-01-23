import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'hpe-list-counter',
  templateUrl: './list-counter.component.html',
  styleUrls: ['./list-counter.component.css']
})
export class ListCounterComponent{

  @Input() count: number;

}
