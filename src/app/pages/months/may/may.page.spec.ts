import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MayPage } from './may.page';

describe('MayPage', () => {
  let component: MayPage;
  let fixture: ComponentFixture<MayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
