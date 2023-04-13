import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private formDetails: any;
  PFEmployee: '';
  PFEmployer: '';
  employeeESI: '';
  employerESI: '';

  constructor() {}
  viewPayroll(
    formValue: any,
    PFEmployee: any,
    PFEmployer: any,
    employeeESI: any,
    employerESI: any
  ) {
    this.formDetails = formValue;
    this.PFEmployee = PFEmployee;
    this.PFEmployer = PFEmployer;
    this.employeeESI = employeeESI;
    this.employerESI = employerESI;
  }

  getFormDetails() {
    return this.formDetails;
  }
}
