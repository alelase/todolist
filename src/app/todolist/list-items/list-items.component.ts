import {Component, OnInit, Input} from '@angular/core';
import {Todolist, Item} from "../todolist.service";

@Component({
  selector: 'hpe-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  @Input() items: Item[];

  private list: Todolist;

  constructor(list: Todolist) {
    this.list = list;
  }

  ngOnInit() {
  }

}
