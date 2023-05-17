import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JanuaryPage } from './january.page';

describe('JanuaryPage', () => {
  let component: JanuaryPage;
  let fixture: ComponentFixture<JanuaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JanuaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
