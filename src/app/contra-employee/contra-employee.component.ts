import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



const mobileRegex = /^[0-9]{10}$/;


@Component({
  selector: 'app-contra-employee',
  templateUrl: './contra-employee.component.html',
  styleUrls: ['./contra-employee.component.scss']
})
export class ContraEmployeeComponent {
  

  constructor(private fb:FormBuilder){
    
  }
  ContractEmployeeForm = this.fb.group({
    contractorName:[''],
    employeeName:[''],
    spouseName:[''],
    maritalStatus:[''],
    DOB:[''],
    EmpMobileNo: ['',[Validators.required,Validators.minLength(10)]],
    gender:[''],
    adhaarNo:[''],
    address:[''],
    pincode:[''],
    city:[''],
    state:[''],
    emergencyContactNo:[''],
    emergencyContactPerson:[''],
    emergencyContactRelation:[''],
    bloodGroup:[''],
    PF_UAN:[''],
    ESI_No:[''],
    transporter:[''],
    village:[''],
  })
  onSubmit() {
    console.log(this.ContractEmployeeForm.value);
  }
}
