import { Component } from '@angular/core';
import { DatetimeserviceService } from './datetimeservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Assignment';
  Todaydate;
   constructor(private datetimeservice: DatetimeserviceService) {}
   ngOnInit() { 
      this.Todaydate = this.datetimeservice.showTodayDate(); 
   }
}
