import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from '././app-routing.module';
import {MatRadioModule} from '@angular/material/radio';
 
import { MaterialExampleModule } from '../material.module';
import { SelectOverviewExample } from './select-overview-example';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PayrollFormComponent } from './payroll-form/payroll-form.component';
import { PayrollDisplayComponent } from './payroll-display/payroll-display.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [SelectOverviewExample, PayrollFormComponent, PayrollDisplayComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
  ],
  bootstrap: [SelectOverviewExample],
})
export class AppModule {}
