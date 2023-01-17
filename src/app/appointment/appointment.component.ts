import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
   submittedDate
   submittedServiceType
   submittedSpecialRequest
   appointPageTitle:string;
   
  constructor() { }

  ngOnInit() {
  }

 

}