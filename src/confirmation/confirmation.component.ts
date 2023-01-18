import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() {}

  ngOnInit() {}
}
