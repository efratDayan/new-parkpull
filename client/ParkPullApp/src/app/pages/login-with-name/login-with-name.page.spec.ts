import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginWithNamePage } from './login-with-name.page';

describe('LoginWithNamePage', () => {
  let component: LoginWithNamePage;
  let fixture: ComponentFixture<LoginWithNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithNamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginWithNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
