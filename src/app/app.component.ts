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
  enableWarning: boolean;
  @ViewChild(CockpitComponent, {static:true}) cockPitComponentRef: Component;
  
  onAdding(data: item){
    
    console.log('cockpit Element State', this.cockPitComponentRef);
    this.serverElements.push(data);
  }

  changenthelement(index: string): void{
    this.enableWarning =false;
    if(Number(index) && Number(index) > 0){
      if(this.serverElements[Number(index) - 1]){
        this.serverElements[Number(index) -1].name = "Changed";
      }
      else{
        this.enableWarning =true;
      }
    }
    else{
      this.enableWarning =true;
    }
  }

  Destroynthelement(index: string): void{
    this.enableWarning =false;
    if(Number(index) && Number(index) > 0){
      if(this.serverElements[Number(index) - 1]){
        // this.serverElements[Number(index) -1].name = "Changed";
        this.serverElements.splice(Number(index) -1, Number(index));
      }
      else{
        this.enableWarning =true;
      }
    }
    else{
      this.enableWarning =true;
    }
  }
}
