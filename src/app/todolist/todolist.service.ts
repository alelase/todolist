import {HpUpPipe} from "./hp-up.pipe";
import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import {UrlResolver} from "@angular/compiler";

export interface Item {
  title: string;
  done: boolean;
  created: Date;
}

@Injectable()
export class Todolist {
  private _items: Item[];
  private _pipe : HpUpPipe;
  constructor(pipe: HpUpPipe, http: Http) {
    this._items = [];
    // [ {title: 'task1', done: false},
    //   {title: 'task2', done: false}
    // ];

    this._pipe = pipe;


    // http.get('https://jsonplaceholder.typicode.com/todos')
    //   .subscribe(response => this._items = response.json());

    // http.get('https://jsonplaceholder.typicode.com/todos')
    //   .do(response => console.log(response.status))
    //   .filter(response => response.json())
    //   .subscribe(items => this._items = items);

    // http.get('https://jsonplaceholder.typicode.com/todos')
    //   .subscribe(
    //     result => console.log(result),
    //     error => console.log(error)
    //   );

    const headers = new Headers();
    headers.append("xxxx","333");

    const search = new URLSearchParams();
    search.append("ale","lase");

    http.get('https://jsonplaceholder.typicode.com/todos', {headers, search})
      .subscribe(response => this._items = response.json());


  }

  get items() {
    return this._items;
  }
  public addItem(title:string): void {
    console.log('addItem called!');
    this.items.push({
      title: title,
      done: false,
      created: new Date()
    })
  }

  public removeItem(item: Item): void {

    this.items.splice(this.items.indexOf(item), 1);
  }

  public countRemains(): number {

    // return this.items.length;
    return this.items.filter((x)=>{
      return !x.done;
    }).length;
  }

  public countCompleted(): number {
    return this.items.filter((x)=>{
      return x.done;
    }).length;
  }

  public removeDone() : void {

      for (let i = this.items.length - 1; i >= 0; i--) {
        if(this.items[i].done) {
          this.items.splice(i, 1);
      }
    }
  }

  public toggleAll(toVal: boolean) : void {
    this.items.forEach((x) => {
      x.done = toVal;
    });
  }

  public updateItem(item: Item, newTitle) : void {
    console.log(newTitle);
    item.title = newTitle;
    console.log(item);
  }

  public upper(value: string) {
    this._pipe.transform(value, "cucu");
  }

}
