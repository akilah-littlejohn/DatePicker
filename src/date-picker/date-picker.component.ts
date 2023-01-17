import { Component, OnInit } from '@angular/core';
import {  FormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {

  constructor() {
 
  }
  selectedDate = new FormControl(new Date());
  
  ngOnInit() {}
  log(value) {
    console.log(value)
  }
}
