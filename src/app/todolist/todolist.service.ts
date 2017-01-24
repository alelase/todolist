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

}
