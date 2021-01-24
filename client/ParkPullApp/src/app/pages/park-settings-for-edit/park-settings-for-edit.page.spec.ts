import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkSettingsForEditPage } from './park-settings-for-edit.page';

describe('ParkSettingsForEditPage', () => {
  let component: ParkSettingsForEditPage;
  let fixture: ComponentFixture<ParkSettingsForEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkSettingsForEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkSettingsForEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
