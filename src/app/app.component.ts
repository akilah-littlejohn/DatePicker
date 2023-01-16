import { Component, VERSION } from '@angular/core';
import { DatePickerComponent } from '../date-picker/date-picker.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  standalone:true,
  imports:[DatePickerComponent]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
