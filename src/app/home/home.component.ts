import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() ninja: object;
  @Output() onYell = new EventEmitter();
  
  homeTitle: string = "Welcome to the ninja directory!";

  constructor() { }

  ngOnInit() {
  }

  alertMe(val:string): void {
    alert(val);
  };

  fireYellEvent(e: object): void {
    this.onYell.emit(e);
  };

};
