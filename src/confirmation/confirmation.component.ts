import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedDataService } from 'src/shared-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  data:FormData

  constructor(private sharedDataService:SharedDataService){}

  ngOnInit(): void {
    this.data = this.sharedDataService.getData();
    console.log(this.data)
  }
}
