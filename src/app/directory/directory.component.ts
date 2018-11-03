import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas: object[] = [
    { name: <string> "Yoshi", belt: <string> "black"},
    { name: <string> "Ryu", belt: <string> "red"},
    { name: <string> "Crystal", belt: <string> "purple"},
  ];

  constructor(private logger: LoggingService) { };

  logIt() : void {
    this.logger.log();
  };
  
  ngOnInit() {
  }

}
