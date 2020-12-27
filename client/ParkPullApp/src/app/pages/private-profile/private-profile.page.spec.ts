import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivateProfilePage } from './private-profile.page';

describe('PrivateProfilePage', () => {
  let component: PrivateProfilePage;
  let fixture: ComponentFixture<PrivateProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
