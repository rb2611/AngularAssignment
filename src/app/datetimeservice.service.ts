import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeserviceService {

  constructor() { }
  showTodayDate() { 
    let ndate = new Date(); 
    return ndate; 
  }
}
