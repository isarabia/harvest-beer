import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JunioPage } from './junio.page';

describe('JunioPage', () => {
  let component: JunioPage;
  let fixture: ComponentFixture<JunioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JunioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
