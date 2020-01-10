import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientChangePasswordComponent } from './admin-client-change-password.component';

describe('AdminClientChangePasswordComponent', () => {
  let component: AdminClientChangePasswordComponent;
  let fixture: ComponentFixture<AdminClientChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
