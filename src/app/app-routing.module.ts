import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollDisplayComponent } from './payroll-display/payroll-display.component';
import { PayrollFormComponent } from './payroll-form/payroll-form.component';
import {ContractorComponent} from './contractor/contractor.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContraEmployeeComponent } from './contra-employee/contra-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
{path:'Home', component :HomePageComponent },
  { path: 'viewPayroll', component: PayrollDisplayComponent },
  { path: 'payrollForm', component: PayrollFormComponent },
  {path:'contra' , component: ContractorComponent},
  {path:'contraEmp' , component: ContraEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {} 
