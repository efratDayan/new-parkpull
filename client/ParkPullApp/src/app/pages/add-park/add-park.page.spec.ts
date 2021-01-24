import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddParkPage } from './add-park.page';

describe('AddParkPage', () => {
  let component: AddParkPage;
  let fixture: ComponentFixture<AddParkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddParkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
