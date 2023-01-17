import { Component, OnInit } from '@angular/core';
import {  FormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  submitted: boolean;
  date:Date;
  serviceType:string = 'hello'
  specialRequest:string
  service_type
  special_request
   constructor() {
 
  }
  selectedDate = new FormControl(new Date());
  
  ngOnInit() {}
  log(value) {
    console.log(value)
  }

  submitAppointment(_date:Date, _service:string, _request:string) {
    this.submitted = true;
   this.date = _date
   this.serviceType = _service
   this.specialRequest = _request
  }
}
