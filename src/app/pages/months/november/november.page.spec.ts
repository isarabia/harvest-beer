import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovemberPage } from './november.page';

describe('NovemberPage', () => {
  let component: NovemberPage;
  let fixture: ComponentFixture<NovemberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
