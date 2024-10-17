import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardTutorPage } from './dashboard-tutor.page';

describe('DashboardTutorPage', () => {
  let component: DashboardTutorPage;
  let fixture: ComponentFixture<DashboardTutorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTutorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
