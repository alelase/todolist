import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item, Todolist} from "../todolist.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'hpe-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit{
  @Input() item: Item;
  // @Output() removed = new EventEmitter<Item>();
  @Output() itemChecked  = new EventEmitter<string>();

  private editing: boolean;

  private inputControl = new FormControl();

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

  private formatTitle()  {
    return this.item.title.toUpperCase();
  }


  ngOnInit() {
    // this.inputControl.valueChanges.subscribe(char => console.log(char));
  }

}
