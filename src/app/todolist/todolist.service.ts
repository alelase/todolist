export interface Item {
  title: string;
  done: boolean;
}

export class Todolist {
  private _items: Item[];

  constructor() {
    this._items = [];
    // [ {title: 'task1', done: false},
    //   {title: 'task2', done: false}
    // ];
  }

  get items() {
    return this._items;
  }
  public addItem(title:string): void {
    console.log('addItem called!');
    this.items.push({
      title: title,
      done: false
    })
  }

  public removeItem(item: Item): void {

    //const index = this
    this.items.splice(this.items.indexOf((item), 1));

  }

  public countRemains(): number {

    return this.items.length;
  }
}
