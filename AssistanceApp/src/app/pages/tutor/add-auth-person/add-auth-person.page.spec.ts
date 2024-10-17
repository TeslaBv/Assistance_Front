import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAuthPersonPage } from './add-auth-person.page';

describe('AddAuthPersonPage', () => {
  let component: AddAuthPersonPage;
  let fixture: ComponentFixture<AddAuthPersonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
