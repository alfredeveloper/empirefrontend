import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminChangePasswordComponent } from './admin-admin-change-password.component';

describe('AdminAdminChangePasswordComponent', () => {
  let component: AdminAdminChangePasswordComponent;
  let fixture: ComponentFixture<AdminAdminChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
