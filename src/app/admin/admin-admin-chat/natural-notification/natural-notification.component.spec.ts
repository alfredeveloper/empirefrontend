import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalNotificationComponent } from './natural-notification.component';

describe('NaturalNotificationComponent', () => {
  let component: NaturalNotificationComponent;
  let fixture: ComponentFixture<NaturalNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
