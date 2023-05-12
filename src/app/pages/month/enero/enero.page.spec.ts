import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EneroPage } from './enero.page';

describe('EneroPage', () => {
  let component: EneroPage;
  let fixture: ComponentFixture<EneroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
