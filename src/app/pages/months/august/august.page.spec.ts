import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AugustPage } from './august.page';

describe('AugustPage', () => {
  let component: AugustPage;
  let fixture: ComponentFixture<AugustPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AugustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
