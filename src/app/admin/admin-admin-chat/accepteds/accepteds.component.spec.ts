import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedsComponent } from './accepteds.component';

describe('AcceptedsComponent', () => {
  let component: AcceptedsComponent;
  let fixture: ComponentFixture<AcceptedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
