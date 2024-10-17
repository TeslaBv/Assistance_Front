import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoChildPage } from './info-child.page';

describe('InfoChildPage', () => {
  let component: InfoChildPage;
  let fixture: ComponentFixture<InfoChildPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
