import {Component, OnInit, Input, APP_BOOTSTRAP_LISTENER} from '@angular/core';
import {Todolist} from "../todolist.service";

@Component({
  selector: 'hpe-list-toggle',
  templateUrl: './list-toggle.component.html',
  styleUrls: ['./list-toggle.component.css']
})
export class ListToggleComponent implements OnInit {
  private _list: Todolist;
  constructor(list: Todolist) {
    this._list = list;
  }

  ngOnInit() {
  }

  toggleAll(val) {
    console.log(val.checked);
    this._list.toggleAll(val.checked);
  }

}
