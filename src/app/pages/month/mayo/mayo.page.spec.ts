import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MayoPage } from './mayo.page';

describe('MayoPage', () => {
  let component: MayoPage;
  let fixture: ComponentFixture<MayoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MayoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
