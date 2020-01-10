import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientStatisticsComponent } from './admin-client-statistics.component';

describe('AdminClientStatisticsComponent', () => {
  let component: AdminClientStatisticsComponent;
  let fixture: ComponentFixture<AdminClientStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClientStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
