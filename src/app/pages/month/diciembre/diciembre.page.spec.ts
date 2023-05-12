import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiciembrePage } from './diciembre.page';

describe('DiciembrePage', () => {
  let component: DiciembrePage;
  let fixture: ComponentFixture<DiciembrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiciembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
