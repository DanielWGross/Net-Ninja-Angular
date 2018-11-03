import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() ninja: object;
  
  homeTitle: string = "Welcome to the ninja directory!";

  constructor() { }

  ngOnInit() {
  }

  alertMe(val:string): void {
    alert(val);
  };

}
