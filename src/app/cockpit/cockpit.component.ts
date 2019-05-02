import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import { item } from '../app.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('createdEvent') newCreated = new EventEmitter<item>();
  serverElements: item[];
  newServerName = '';
  // newServerContent = '';
  @ViewChild('contentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: string) {
    this.newServerName = serverNameInput;
    this.newCreated.emit({
      name: serverNameInput,
      content: this.serverContentInput.nativeElement.value,
      type: 'server'
    });
    // const elem: item = new item();
    // elem.content = serverNameDesc;
    // elem.name = serverNameInput;
    // elem.type = 'server';
    // this.newCreated.emit(elem);
  }

  onAddBlueprint(bluePrintInput: string) {
    this.newCreated.emit({
      name: bluePrintInput,
      content: this.serverContentInput.nativeElement.value,
      type: 'blueprint'
    });
    // const elem: item = new item();
    // elem.content = bluePrintDesc;
    // elem.name = bluePrintInput;
    // elem.type = 'blueprint';
    // this.newCreated.emit(elem);
  }

}
