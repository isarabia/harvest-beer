import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarchPage } from './march.page';

describe('MarchPage', () => {
  let component: MarchPage;
  let fixture: ComponentFixture<MarchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
