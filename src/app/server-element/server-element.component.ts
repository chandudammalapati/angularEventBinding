import { Component, OnInit, Input } from '@angular/core';
import { item } from '../app.model'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: item;
  constructor() { }

  ngOnInit() {
  }

}
