import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraEmployeeComponent } from './contra-employee.component';

describe('ContraEmployeeComponent', () => {
  let component: ContraEmployeeComponent;
  let fixture: ComponentFixture<ContraEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
