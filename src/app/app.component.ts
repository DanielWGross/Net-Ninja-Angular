import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ninja-directory';
  name: string = 'ninja';
  ninja = {
    name: <string> 'Ryu',
    belt: <string> 'Red'
  };
  yell(e: object): void {
    alert('I am yelling');
  };
};
