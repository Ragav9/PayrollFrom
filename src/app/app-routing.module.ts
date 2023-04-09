import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollDisplayComponent } from './payroll-display/payroll-display.component';
import { PayrollFormComponent } from './payroll-form/payroll-form.component';
const routes: Routes = [
  { path: 'payrollDisplay', component: PayrollDisplayComponent },
  { path: 'payrollForm', component: PayrollFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
