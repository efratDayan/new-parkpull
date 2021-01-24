import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarSettingsForEditPage } from './car-settings-for-edit.page';

describe('CarSettingsForEditPage', () => {
  let component: CarSettingsForEditPage;
  let fixture: ComponentFixture<CarSettingsForEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSettingsForEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarSettingsForEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
