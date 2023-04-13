import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

import {
  UntypedFormGroup,
  UntypedFormControl,
  UntypedFormBuilder,
} from '@angular/forms';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payroll-form',
  templateUrl: './payroll-form.component.html',
  styleUrls: ['./payroll-form.component.scss'],
})
export class PayrollFormComponent implements OnInit {
  code: string;
  plant = 'P4';
  currentNumber = 1;
  startDate: Date;

  employeeESI = '';
  employerESI = '';
  PFEmployee = '';
  PFEmployer = '';
  grossSalary = '';
  totalDeduct = '';
  NETtakeHome = '';
  ctc = '';
  monthWage = 26;
  wagetype: string;

  payrollFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private appService: AppService,
    private router: Router
  ) {
    this.payrollFormGroup = this._formBuilder.group({
      // PayScaleCode: [this.generatePayscaleCode(plant)],
      PayScaleCode: [''],
      PayScaleDescription: ['', Validators.required],
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
      others: this._formBuilder.array([]),
      totalEarnings: [''],
      DPF: [''],
      DESI: [''],
      canteenDeduction: [''],
      professionalTax: [''],
      professionalTaxAmount: [''],
      labourWelfareFund: [''],
      deductions: {
        deduction_1: { name_1: [''], amount_1: [''] },
        deduction_2: { name_2: [''], amount_2: [''] },
        deduction_3: { name_3: [''], amount_3: [''] },
        deduction_4: { name_4: [''], amount_4: [''] },
        deduction_5: { name_5: [''], amount_5: [''] },
      },
      totalDeduction: [''],
      netTakeHome: [''],
      EPF: [''],
      EESI: [''],
      CTC: [''],
      servicChargeType: [''],
      serviceCharge: [''],
      ServiceTax: [''],
    });
  }

  others(): FormArray {
    return this.payrollFormGroup.get('others') as FormArray;
  }
  newEarnings() {
    return this._formBuilder.group({
      other_: { name_: '', amount_: '' },
    });
  }
  addNewEarning() {
    return this.others().push(this.newEarnings());
  }
  deleteEarning(i: number) {
    this.others().removeAt(i);
  }

  ngOnInit(): any {
    const code = this.generatePayscaleCode(this.plant);
    this.payrollFormGroup.patchValue({ PayScaleCode: code });
    console.log(code);
    this.calculateTotalEarnings();
    this.calculateTotalDeduction();
  }

  setEffectiveFromDate(date: any) {
    // this.payrollFormGroup.get('effectiveFrom')?.patchValue(event.value);
    const stringDate: any = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    this.payrollFormGroup.get('effectiveFrom')?.setValue(stringDate);
  }

  generatePayscaleCode(plant: String) {
    const codeNumber = this.currentNumber.toString().padStart(4, '0');
    this.currentNumber++;
    return `${this.plant}/${codeNumber}`;
  }

  onFormChange() {
    this.calculateTotalEarnings();
    this.calculateTotalDeduction();
    this.calculateNETtakeHome();
    this.calculateCTC();
  }

  // Employee ESI
  employeeESICalc() {
    const emplyoeeValue = this.payrollFormGroup.get('DESI')?.value;
    this.employeeESI = (Number(emplyoeeValue) * 0.01 * Number(this.grossSalary))
      .toFixed(2)
      .toString();
  }

  // Employer ESI
  employerESICalc() {
    const employerValue = this.payrollFormGroup.get('EESI')?.value;
    this.employerESI = (Number(employerValue) * 0.01 * Number(this.grossSalary))
      .toFixed(2)
      .toString();
  }
  viewWageType() {
    this.wagetype = this.payrollFormGroup.get('wageType')?.value;
  }
  employeePFCalc() {
    // Employee PF
    const employee = this.payrollFormGroup.get('DPF')?.value;
    this.PFEmployee = (
      employee *
      0.01 *
      (this.payrollFormGroup.get('basic')?.value +
        this.payrollFormGroup.get('DA')?.value)
    )
      .toFixed(2)
      .toString();
  }

  // Employer PF
  employerPFCalc() {
    const employer = this.payrollFormGroup.get('EPF')?.value;
    this.PFEmployer = (
      employer *
      0.01 *
      (this.payrollFormGroup.get('basic')?.value +
        this.payrollFormGroup.get('DA')?.value)
    )
      .toFixed(2)
      .toString();
  }

  // TotalDeduction
  calculateTotalDeduction() {
    const epf = Number(this.PFEmployee) || 0;
    const esi = Number(this.employeeESI) || 0;
    const profTax =
      Number(this.payrollFormGroup.get('professionalTaxAmount')?.value) || 0;
    const labourFund =
      this.payrollFormGroup.get('labourWelfareFund')?.value || 0;

    this.totalDeduct = epf + esi + profTax + labourFund;
    
    if (this.wagetype === 'Daily') {
     const deduct = Number(this.totalDeduct) * this.monthWage
      this.payrollFormGroup.patchValue({ totalDeduction: deduct})
    } else {
      this.payrollFormGroup.patchValue({ totalDeduction:this.totalDeduct  })
    }

    
  }

  // TotalEarnings
  calculateTotalEarnings() {
    const basic = this.payrollFormGroup.get('basic')?.value || 0;
    const da = this.payrollFormGroup.get('DA')?.value || 0;
    const hra = this.payrollFormGroup.get('HRA')?.value || 0;
    const conveyance = this.payrollFormGroup.get('conveyance')?.value || 0;
    const medicalAllowance =
      this.payrollFormGroup.get('medicalAllowance')?.value || 0;
    const specialAllowance =
      this.payrollFormGroup.get('specialAllowance')?.value || 0;
    const incentiveSkilled =
      this.payrollFormGroup.get('incentiveSkilled')?.value || 0;
    const incentiveUnskilled =
      this.payrollFormGroup.get('incentiveUnskilled')?.value || 0;
    const attendanceAllowance =
      this.payrollFormGroup.get('attendanceAllowance')?.value || 0;
    const nightShiftAllowance =
      this.payrollFormGroup.get('nightShiftAllowance')?.value || 0;
    const other_1_amount =
      this.payrollFormGroup.get('others.other_1.amount_1')?.value || 0;
    const other_2_amount =
      this.payrollFormGroup.get('others.other_2.amount_2')?.value || 0;
    const other_3_amount =
      this.payrollFormGroup.get('others.other_3.amount_3')?.value || 0;
    const other_4_amount =
      this.payrollFormGroup.get('others.other_4.amount_4')?.value || 0;
    const other_5_amount =
      this.payrollFormGroup.get('others.other_5.amount_5')?.value || 0;
    const other_6_amount =
      this.payrollFormGroup.get('others.other_6.amount_6')?.value || 0;

    this.grossSalary =
      basic +
      da +
      hra +
      conveyance +
      medicalAllowance +
      specialAllowance +
      incentiveSkilled +
      incentiveUnskilled +
      attendanceAllowance +
      nightShiftAllowance +
      other_1_amount +
      other_2_amount +
      other_3_amount +
      other_4_amount +
      other_5_amount +
      other_6_amount;

    if (this.wagetype === 'Daily') {
      const monthGrossSalary = Number(this.grossSalary) * this.monthWage;
      this.payrollFormGroup.patchValue({ totalEarnings: monthGrossSalary });
    } else {
      this.payrollFormGroup.patchValue({ totalEarnings: this.grossSalary });
    }

  }
  calculateNETtakeHome() {
    const netValue = Number(this.grossSalary) - Number(this.totalDeduct);
    this.NETtakeHome = netValue.toFixed(2).toString();
    this.payrollFormGroup.patchValue({ netTakeHome: this.NETtakeHome });
  }

  calculateCTC() {
    const ctc = Number(this.grossSalary) + Number(this.totalDeduct);
    this.payrollFormGroup.patchValue({ CTC: ctc });
  }

  resetForm() {
    this.payrollFormGroup.reset();
    this.employeeESI = '';
    this.employerESI = '';
    this.PFEmployee = '';
    this.PFEmployer = '';
    this.totalDeduct = '';
    this.grossSalary = '';
    this.NETtakeHome = '';
    this.ctc = '';
  }

  onPreview() {
    // console.log(
    //   this.payrollFormGroup.value,
    //   this.PFEmployee,
    //   this.PFEmployer,
    //   this.employeeESI,
    //   this.employerESI
    // );
    this.appService.viewPayroll(
      this.payrollFormGroup.value,
      this.PFEmployee,
      this.PFEmployer,
      this.employeeESI,
      this.employerESI
    );
    this.router.navigate(['/viewPayroll']);
  }

  onSubmit() {
    console.log(this.payrollFormGroup.value);
  }
}
