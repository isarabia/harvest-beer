import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JunePage } from './june.page';

describe('JunePage', () => {
  let component: JunePage;
  let fixture: ComponentFixture<JunePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JunePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
