import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentRegisterPage } from './student-register.page';

describe('StudentRegisterPage', () => {
  let component: StudentRegisterPage;
  let fixture: ComponentFixture<StudentRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
