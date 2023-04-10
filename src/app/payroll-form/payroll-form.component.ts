import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payroll-form',
  templateUrl: './payroll-form.component.html',
  styleUrls: ['./payroll-form.component.scss'],
})
export class PayrollFormComponent implements OnInit {
  payrollFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit() {
    this.payrollFormGroup = this._formBuilder.group({
      PayScaleDescription: [''],
      wageType: [''],
      effectiveFrom: [''],
      basic: [''],
      DA: [''],
      HRA: [''],
      conveyance: [''],
      medicalAllowance: [''],
      specialAllowance: [''],
      incentiveSkilled: [''],
      incentiveUnskilled: [''],
      attendanceAllowance: [''],
      nightShiftAllowance: [''],
      others: {
        other_1: [''],
        other_2: [''],
        other_3: [''],
        other_4: [''],
        other_5: [''],
        other_6: [''],
      },
      totalEarnings: [''],
      DPF: [''],
      DESI: [''],
      canteenDeduction: [''],
      professioinalTax: [''],
      labourWelfareFund: [''],
      deductions: {
        deduction_1: [''],
        deduction_2: [''],
        deduction_3: [''],
        deduction_4: [''],
        deduction_5: [''],
      },
      totalDrduction: [''],
      netTakeHome: [''],
      EPF: [''],
      EESI: [''],
      CTC: [''],
      servicCharge: [''],
      serviceChargeOn: [''],
      ServiceTax: [''],
    });
  }
}
