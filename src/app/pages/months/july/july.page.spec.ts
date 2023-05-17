import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JulyPage } from './july.page';

describe('JulyPage', () => {
  let component: JulyPage;
  let fixture: ComponentFixture<JulyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JulyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
