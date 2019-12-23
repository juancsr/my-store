import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  item: string;
  helpText: string;
  items = ['Juan', 'Camilo', 'Nicolas'];

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
