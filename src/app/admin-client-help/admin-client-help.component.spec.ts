import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientHelpComponent } from './admin-client-help.component';

describe('AdminClientHelpComponent', () => {
  let component: AdminClientHelpComponent;
  let fixture: ComponentFixture<AdminClientHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
