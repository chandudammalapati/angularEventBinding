import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';
import { item } from '../app.model'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked {
  @Input() element: item;
  @Input() name: string;
  @ViewChild('headingText') headingTextContent : ElementRef;
  
  constructor() { 
    console.log("server element constructer has been initialized.");
  }

  ngOnInit() {
    console.log("ng oninit called in server element");
    console.log("text heading on init", this.headingTextContent.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ng on changes called in server element with changes", changes);
  }
  ngDoCheck(): void{
    console.log("ng Do Check called in server element");
  }

  ngAfterContentInit(): void{
    console.log("ngAfterContent Init in server element");
  }

  ngAfterContentChecked(): void{
    console.log("ngAfterContent Checked in server element");
  }

  ngAfterViewInit(): void{
    console.log("ngAfterView Init in server element");
    console.log("text heading after view init", this.headingTextContent.nativeElement);
  }

  ngAfterViewChecked(): void{
    console.log("ngAfterView Checked in server element");
  }

  ngOnDestroy(): void{
    console.log("Component destroyed");
  }

}
