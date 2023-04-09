import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialExampleModule } from '../material.module';
import { SelectOverviewExample } from './select-overview-example';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PayrollFormComponent } from './payroll-form/payroll-form.component';
import { PayrollDisplayComponent } from './payroll-display/payroll-display.component';
@NgModule({
  declarations: [SelectOverviewExample, PayrollFormComponent, PayrollDisplayComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  bootstrap: [SelectOverviewExample],
})
export class AppModule {}
