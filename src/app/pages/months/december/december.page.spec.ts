import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DecemberPage } from './december.page';

describe('DecemberPage', () => {
  let component: DecemberPage;
  let fixture: ComponentFixture<DecemberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DecemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
