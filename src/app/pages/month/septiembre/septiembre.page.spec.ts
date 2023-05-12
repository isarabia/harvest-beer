import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeptiembrePage } from './septiembre.page';

describe('SeptiembrePage', () => {
  let component: SeptiembrePage;
  let fixture: ComponentFixture<SeptiembrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeptiembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
