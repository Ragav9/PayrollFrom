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
  setFormDetails(formDetails: any) {
    this.formDetails = formDetails;
  }

  setPFEmployee(PFEmployee: any) {
    this.PFEmployee = PFEmployee;
  }

  setPFEmployer(PFEmployer: any) {
    this.PFEmployer = PFEmployer;
  }

  setEmployeeESI(employeeESI: any) {
    this.employeeESI = employeeESI;
  }

  setEmployerESI(employerESI: any) {
    this.employerESI = employerESI;
  }

  getFormDetails() {
    return this.formDetails;
  }
  getPFEmployee() {
    return this.PFEmployee;
  }

  getPFEmployer() {
    return this.PFEmployer;
  }

  getEmployeeESI() {
    return this.employeeESI;
  }

  getEmployerESI() {
    return this.employerESI;
  }
}
