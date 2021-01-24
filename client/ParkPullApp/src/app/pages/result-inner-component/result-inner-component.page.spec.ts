import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultInnerComponentPage } from './result-inner-component.page';

describe('ResultInnerComponentPage', () => {
  let component: ResultInnerComponentPage;
  let fixture: ComponentFixture<ResultInnerComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultInnerComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultInnerComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
