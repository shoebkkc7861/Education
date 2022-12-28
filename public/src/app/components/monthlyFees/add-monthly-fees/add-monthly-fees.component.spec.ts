import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMonthlyFeesComponent } from './add-monthly-fees.component';

describe('AddMonthlyFeesComponent', () => {
  let component: AddMonthlyFeesComponent;
  let fixture: ComponentFixture<AddMonthlyFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMonthlyFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMonthlyFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
