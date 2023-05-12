import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OctubrePage } from './octubre.page';

describe('OctubrePage', () => {
  let component: OctubrePage;
  let fixture: ComponentFixture<OctubrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OctubrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
