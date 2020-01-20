import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridicalNotificationComponent } from './juridical-notification.component';

describe('JuridicalNotificationComponent', () => {
  let component: JuridicalNotificationComponent;
  let fixture: ComponentFixture<JuridicalNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuridicalNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuridicalNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
