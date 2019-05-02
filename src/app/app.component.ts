import { Component, ViewChild} from '@angular/core';
import { item } from './app.model';
import { CockpitComponent } from './cockpit/cockpit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:item[] =  Array<item>();
  
  @ViewChild(CockpitComponent) cockPitComponentRef: Component;
  
  onAdding(data: item){
    
    console.log('cockpit Element State', this.cockPitComponentRef);
    this.serverElements.push(data);
  }
}
