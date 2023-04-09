import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Payroll {
  PayScaleCode: string;
  PayScaleDescription: string;
  WageType: string;
  Effectivefrom: string;
  Earnings: {
    Basic: string;
    DA: string;
    HRA: string;
    Conveyance: string;
    MedicalAllowance: string;
    SpecialAllowance: string;
    Incentvie_Skilled: string;
    Incentvie_Unskilled: string;
    AttendanceIncentive: string;
    NightshiftAllowance: string;
    Others_1: string;
    Others_2: string;
    Others_3: string;
    Others_4: string;
    Others_5: string;
    Others_6: string;
    TotalEarning: string;
  };
  Deductions: {
    PF: string;
    ESI: string;
    Canteendeduction: string;
    ProfessionalTax: string;
    LabourWelfareFund: string;
    Deductions_1: string;
    Deductions_2: string;
    Deductions_3: string;
    Deductions_4: string;
    Deductions_5: string;
    Total_Deduction: string;
  };
  NetTakeHomePaidtoCL: string;
  PF: string;
  ESI: string;
  CTC: string;
}
@Component({
  selector: 'app-payroll-display',
  templateUrl: './payroll-display.component.html',
  styleUrls: ['./payroll-display.component.scss'],
})
export class PayrollDisplayComponent {
  payrollData: Payroll[] = [
    {
      PayScaleCode: '10000',
      PayScaleDescription: 'ten thousand for contractor',
      WageType: 'Month',
      Effectivefrom: '20-04-2023',
      Earnings: {
        Basic: '5000',
        DA: '800',
        HRA: '1200',
        Conveyance: '250',
        MedicalAllowance: '250',
        SpecialAllowance: '300',
        Incentvie_Skilled: '500',
        Incentvie_Unskilled: '250',
        AttendanceIncentive: '300',
        NightshiftAllowance: '750',
        Others_1: '',
        Others_2: '',
        Others_3: '',
        Others_4: '',
        Others_5: '',
        Others_6: '',
        TotalEarning: '1236',
      },
      Deductions: {
        PF: '850',
        ESI: '250',
        Canteendeduction: '50',
        ProfessionalTax: '120',
        LabourWelfareFund: '120',
        Deductions_1: 'remark',
        Deductions_2: 'remark',
        Deductions_3: 'ngd',
        Deductions_4: 'ngf',
        Deductions_5: 'jf',
        Total_Deduction: '1800',
      },
      NetTakeHomePaidtoCL: '6200',
      PF: '850',
      ESI: '120',
      CTC: '100000',
    },
    {
      PayScaleCode: '12000',
      PayScaleDescription: 'ttwlelve thousand for contractor',
      WageType: 'month',
      Effectivefrom: '20-04-2023',
      Earnings: {
        Basic: '5030',
        DA: '800',
        HRA: '1200',
        Conveyance: '250',
        MedicalAllowance: '250',
        SpecialAllowance: '300',
        Incentvie_Skilled: '500',
        Incentvie_Unskilled: '250',
        AttendanceIncentive: '300',
        NightshiftAllowance: '750',
        Others_1: '',
        Others_2: '',
        Others_3: '',
        Others_4: '',
        Others_5: '',
        Others_6: '',
        TotalEarning: '2514',
      },
      Deductions: {
        PF: '850',
        ESI: '250',
        Canteendeduction: '50',
        ProfessionalTax: '120',
        LabourWelfareFund: '120',
        Deductions_1: 'remark',
        Deductions_2: 'remark',
        Deductions_3: 'ngd',
        Deductions_4: 'ngf',
        Deductions_5: 'jf',
        Total_Deduction: '1800',
      },
      NetTakeHomePaidtoCL: '6200',
      PF: '850',
      ESI: '120',
      CTC: '140000',
    },
    {
      PayScaleCode: '9000',
      PayScaleDescription: 'nine thousand for contractor',
      WageType: 'month',
      Effectivefrom: '20-04-2023',
      Earnings: {
        Basic: '5060',
        DA: '800',
        HRA: '1200',
        Conveyance: '250',
        MedicalAllowance: '250',
        SpecialAllowance: '300',
        Incentvie_Skilled: '500',
        Incentvie_Unskilled: '2520',
        AttendanceIncentive: '300',
        NightshiftAllowance: '750',
        Others_1: '',
        Others_2: '',
        Others_3: '',
        Others_4: '',
        Others_5: '',
        Others_6: '',
        TotalEarning: '7854',
      },
      Deductions: {
        PF: '850',
        ESI: '250',
        Canteendeduction: '50',
        ProfessionalTax: '120',
        LabourWelfareFund: '120',
        Deductions_1: 'remark',
        Deductions_2: 'remark',
        Deductions_3: 'ngd',
        Deductions_4: 'ngf',
        Deductions_5: 'jf',
        Total_Deduction: '1800',
      },
      NetTakeHomePaidtoCL: '6200',
      PF: '850',
      ESI: '120',
      CTC: '90000',
    },
  ];
  selectedPayroll: Payroll | undefined | null;

  onPayScaleSelectionChange(payScaleCode: string): void {
    this.selectedPayroll = this.payrollData.find(
      (data) => data.PayScaleCode === payScaleCode
    );
  }

  saveData() {
    console.log(this.selectedPayroll);
    // this.myPayrollData.reset();
  }
}
