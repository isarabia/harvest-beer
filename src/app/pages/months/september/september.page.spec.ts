import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeptemberPage } from './september.page';

describe('SeptemberPage', () => {
  let component: SeptemberPage;
  let fixture: ComponentFixture<SeptemberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeptemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
