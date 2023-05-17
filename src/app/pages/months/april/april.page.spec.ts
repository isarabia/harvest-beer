import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AprilPage } from './april.page';

describe('AprilPage', () => {
  let component: AprilPage;
  let fixture: ComponentFixture<AprilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AprilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
