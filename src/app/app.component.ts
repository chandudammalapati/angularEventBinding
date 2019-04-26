import { Component } from '@angular/core';
import { item } from './app.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:item[] =  Array<item>();
  
  onAdding(data: item){
    this.serverElements.push(data);
  }
}
