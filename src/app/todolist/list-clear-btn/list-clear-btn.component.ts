import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Todolist} from "../todolist.service";

@Component({
  selector: 'hpe-list-clear-btn',
  templateUrl: './list-clear-btn.component.html',
  styleUrls: ['./list-clear-btn.component.css']
})
export class ListClearBtnComponent implements OnInit {

  @Output() clearDone = new EventEmitter<any>();

  constructor(private list: Todolist) { }

  ngOnInit() {
  }

  private test(event:Event) {
    event.preventDefault();
    console.log(event);
  }
}
