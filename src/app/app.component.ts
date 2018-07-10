import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem: string = '';
  removedIndex: number = -1;
  items: string[] = [];

  addItem(){
    this.items.push(this.currentItem);
    this.currentItem = '';
    console.log(this.items);
  }

  removeItem(index: number){
    this.removedIndex = index;
    setTimeout(()=>{
      this.items.splice(index,1);
      this.removedIndex = -1;
    },1000);



  }
}
