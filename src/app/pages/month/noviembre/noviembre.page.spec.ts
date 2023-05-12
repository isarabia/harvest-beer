import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoviembrePage } from './noviembre.page';

describe('NoviembrePage', () => {
  let component: NoviembrePage;
  let fixture: ComponentFixture<NoviembrePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoviembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
