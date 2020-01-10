import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminChatComponent } from './admin-admin-chat.component';

describe('AdminAdminChatComponent', () => {
  let component: AdminAdminChatComponent;
  let fixture: ComponentFixture<AdminAdminChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
