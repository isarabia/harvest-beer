import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerPage } from './beer.page';

describe('BeerPage', () => {
  let component: BeerPage;
  let fixture: ComponentFixture<BeerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
