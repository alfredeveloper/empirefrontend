import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientConfigurationComponent } from './admin-client-configuration.component';

describe('AdminClientConfigurationComponent', () => {
  let component: AdminClientConfigurationComponent;
  let fixture: ComponentFixture<AdminClientConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
