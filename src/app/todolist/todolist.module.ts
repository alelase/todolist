import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListMainComponent } from './list-main/list-main.component';
import { ListFooterComponent } from './list-footer/list-footer.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListCounterComponent } from './list-counter/list-counter.component';
import { ListClearBtnComponent } from './list-clear-btn/list-clear-btn.component';
import { ListTitleComponent } from './list-title/list-title.component';
import { ListInputComponent } from './list-input/list-input.component';
import { ListToggleComponent } from './list-toggle/list-toggle.component';
import { TodolistComponent } from './todolist/todolist.component';
import {Todolist} from "./todolist.service";
import {MarkerDirective} from "./marker.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Todolist],
  declarations: [ListHeaderComponent,
    ListMainComponent, ListFooterComponent,
    ListItemsComponent, ListItemComponent, ListCounterComponent,
    ListClearBtnComponent, ListTitleComponent, ListInputComponent,
    ListToggleComponent, TodolistComponent, MarkerDirective],
  exports:[TodolistComponent]
})
export class TodolistModule { }
