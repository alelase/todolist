import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item, Todolist} from "../todolist.service";

@Component({
  selector: 'hpe-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent{
  @Input() item: Item;
  // @Output() removed = new EventEmitter<Item>();

  constructor(private list: Todolist) {

  }
}
