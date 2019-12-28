import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'my-store';
  item: string;
  helpText: string;
  items = ['Juan', 'Camilo', 'Nicolas'];
  myNumber = 10;

  constructor() { }

  ngOnInit() {
  }

  agregarItem() {
    if (this.item) {
      this.items.push(this.item);
      this.helpText = null;
      this.item = null;
    } else {
      this.helpText = 'Debes escribir algo';
    }
  }

  deleteItem(index: number) {
   this.items.splice(index, 1 );
  }
}
