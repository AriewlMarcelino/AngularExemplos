import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isAliveCheckSample:boolean = true;
  disposeMenuSample():void{
    this.isAliveCheckSample = false;
  }
}
