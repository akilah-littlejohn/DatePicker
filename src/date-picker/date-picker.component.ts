import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { SharedDataService } from 'src/shared-data.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  submitted: boolean;

  constructor(public route:Router, private sharedDataService:SharedDataService) {}

  ngOnInit() {}


  onSubmit(formData:FormData) {
    console.table(formData)
    this.sharedDataService.setData(formData);
    this.route.navigate(['/confirmation']);
  }
}
