import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RegistryPage } from './registry.page';

describe('RegistryPage', () => {
  let component: RegistryPage;
  let fixture: ComponentFixture<RegistryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistryPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
