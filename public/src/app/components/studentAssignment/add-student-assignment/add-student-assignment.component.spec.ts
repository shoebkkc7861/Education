import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentAssignmentComponent } from './add-student-assignment.component';

describe('AddStudentAssignmentComponent', () => {
  let component: AddStudentAssignmentComponent;
  let fixture: ComponentFixture<AddStudentAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
