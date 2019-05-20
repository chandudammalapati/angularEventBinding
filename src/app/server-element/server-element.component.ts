import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { item } from '../app.model'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: item;
  @Input() name: string;

  
  constructor() { 
    console.log("server element constructer has been initialized.");
  }

  ngOnInit() {
    console.log("ng oninit called in server element");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ng on changes called in server element with changes", changes);
  }
  ngDoCheck(): void{
    console.log("ng Do Check called in server element");
  }

}
