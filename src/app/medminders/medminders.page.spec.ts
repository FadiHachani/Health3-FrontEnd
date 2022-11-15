import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedmindersPage } from './medminders.page';

describe('MedmindersPage', () => {
  let component: MedmindersPage;
  let fixture: ComponentFixture<MedmindersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedmindersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedmindersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
