import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReminderPage } from './reminder.page';

describe('ReminderPage', () => {
  let component: ReminderPage;
  let fixture: ComponentFixture<ReminderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
