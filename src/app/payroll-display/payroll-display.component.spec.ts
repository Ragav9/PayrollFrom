import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollDisplayComponent } from './payroll-display.component';

describe('PayrollDisplayComponent', () => {
  let component: PayrollDisplayComponent;
  let fixture: ComponentFixture<PayrollDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
