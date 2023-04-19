import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common'



@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
})
export class SelectOverviewExample {
  constructor( private location:Location) {}
  back() {
    this.location.back();
  }
 }
