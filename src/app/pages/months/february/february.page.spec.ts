import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FebruaryPage } from './february.page';

describe('FebruaryPage', () => {
  let component: FebruaryPage;
  let fixture: ComponentFixture<FebruaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FebruaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
