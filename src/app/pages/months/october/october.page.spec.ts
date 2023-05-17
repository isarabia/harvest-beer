import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OctoberPage } from './october.page';

describe('OctoberPage', () => {
  let component: OctoberPage;
  let fixture: ComponentFixture<OctoberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OctoberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
