import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent {

  contractorForm  = this.fb.group({
    ContractorName:[''],
    ContrOwnerName:[''],
    ContraOwnerNumber:[''],
    ContraOwnerEmail:[''],
    PocPerson:[''],
    Number:[''],
    Email:[''],
    Address:[''],
  MaxHeadLimit:[''],
  L_Number:[''],
  L_Valid_From:[''],
  L_Valid_To:[''],
EffectIveDate:['']
  })
  constructor(private fb:FormBuilder){
  }

 
  onSubmit() {
    console.log(this.contractorForm.value);
  }



}
