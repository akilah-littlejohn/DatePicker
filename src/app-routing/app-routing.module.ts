import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';

const routes: Routes = [
  { path: '/datepicker', component: DatePickerComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
