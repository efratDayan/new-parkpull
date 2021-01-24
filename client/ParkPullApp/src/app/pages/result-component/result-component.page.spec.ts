import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultComponentPage } from './result-component.page';

describe('ResultComponentPage', () => {
  let component: ResultComponentPage;
  let fixture: ComponentFixture<ResultComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
