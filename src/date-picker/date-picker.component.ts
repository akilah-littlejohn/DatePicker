import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  submitted: boolean;
  date: Date;
  serviceType: string;
  specialRequest;
  service_type;
  special_request;

  constructor(public route:Router) {}
  selectedDate = new FormControl(new Date());

  ngOnInit() {}

  submitAppointment(_date: Date, _service: string, _request: string) {
    this.submitted = true;
    this.date = _date;
    this.serviceType = _service;
    this.specialRequest = _request;
    this.route.navigate(['confirmation'])
  }
}
