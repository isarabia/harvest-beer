import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FebreroPage } from './febrero.page';

describe('FebreroPage', () => {
  let component: FebreroPage;
  let fixture: ComponentFixture<FebreroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FebreroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
