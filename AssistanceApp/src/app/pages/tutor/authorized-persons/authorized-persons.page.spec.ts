import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizedPersonsPage } from './authorized-persons.page';

describe('AuthorizedPersonsPage', () => {
  let component: AuthorizedPersonsPage;
  let fixture: ComponentFixture<AuthorizedPersonsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedPersonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
