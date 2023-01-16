import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, MatDatepickerModule,MatFormFieldModule, MatInputModule],
  declarations: [ AppComponent, HelloComponent, DatePickerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
