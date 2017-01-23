import { Component, OnInit } from '@angular/core';
import {Todolist} from "../todolist.service";

@Component({
  selector: 'hpe-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private list:Todolist) {
    console.log(list);
  }


  ngOnInit() {
  }

}
