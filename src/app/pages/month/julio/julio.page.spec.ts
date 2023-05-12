import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JulioPage } from './julio.page';

describe('JulioPage', () => {
  let component: JulioPage;
  let fixture: ComponentFixture<JulioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JulioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
