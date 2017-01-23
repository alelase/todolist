import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'hpe-list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent {

  @Output() valueAdded  = new EventEmitter<string>();

}
