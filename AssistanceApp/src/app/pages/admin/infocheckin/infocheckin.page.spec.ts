import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfocheckinPage } from './infocheckin.page';

describe('InfocheckinPage', () => {
  let component: InfocheckinPage;
  let fixture: ComponentFixture<InfocheckinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
