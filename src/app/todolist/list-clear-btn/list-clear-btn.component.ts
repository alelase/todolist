import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hpe-list-clear-btn',
  templateUrl: './list-clear-btn.component.html',
  styleUrls: ['./list-clear-btn.component.css']
})
export class ListClearBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private test(event:Event) {
    event.preventDefault();
    console.log(event);
  }
}
