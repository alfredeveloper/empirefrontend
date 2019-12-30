import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminHelpComponent } from './admin-admin-help.component';

describe('AdminAdminHelpComponent', () => {
  let component: AdminAdminHelpComponent;
  let fixture: ComponentFixture<AdminAdminHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
