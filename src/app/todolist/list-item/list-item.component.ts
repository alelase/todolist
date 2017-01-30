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
  @Output() itemChecked  = new EventEmitter<string>();

  private editing: boolean;

  constructor(private list: Todolist) {
  }

  private onChange(item: Item) {
    item.done = !item.done;
  }

  private editItem(): void {
    this.editing = !this.editing;
  }

  private updateItem(newVal:string): void {
    this.editing = false;
    this.list.updateItem(this.item, newVal);
  }

}
