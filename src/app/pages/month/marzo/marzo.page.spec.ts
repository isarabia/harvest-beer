import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarzoPage } from './marzo.page';

describe('MarzoPage', () => {
  let component: MarzoPage;
  let fixture: ComponentFixture<MarzoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarzoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
