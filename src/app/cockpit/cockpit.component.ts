import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { item } from '../app.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() newCreated = new EventEmitter<item>();
  serverElements : item[];
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    let elem :item = new item();
    elem.content = this.newServerContent;
    elem.name = this.newServerName;
    elem.type = 'server';
    this.newCreated.emit(elem);
  }

  onAddBlueprint() {
    let elem :item = new item();
    elem.content = this.newServerContent;
    elem.name = this.newServerName;
    elem.type = 'blueprint';
    this.newCreated.emit(elem);
  }

}
