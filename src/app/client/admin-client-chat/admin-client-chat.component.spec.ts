import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientChatComponent } from './admin-client-chat.component';

describe('AdminClientChatComponent', () => {
  let component: AdminClientChatComponent;
  let fixture: ComponentFixture<AdminClientChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
