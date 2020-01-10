import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminClientComponent } from './admin-admin-client.component';

describe('AdminAdminClientComponent', () => {
  let component: AdminAdminClientComponent;
  let fixture: ComponentFixture<AdminAdminClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdminClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
