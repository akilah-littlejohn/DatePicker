import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  @Input() confirmed_date: Date;
  @Input() confirmed_serviceType: string;
  @Input() confirmed_specialRequest: string;
  @Input() resubmit: boolean;
  @Input() f:NgForm
  @Output() resubmitAppointment = new EventEmitter<boolean>();

  constructor() {

  }

  ngOnInit() {
    this.confirmed_date;
    this.confirmed_serviceType;
    this.confirmed_specialRequest;
    this.resubmit
  }

  appointmentSubmission(value: boolean) {
    this.resubmit = false;
    this.resubmitAppointment.emit(this.resubmit);
    this.f.reset()

  }
}
