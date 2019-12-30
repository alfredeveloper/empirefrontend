import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClientNaturalComponent } from './register-client-natural.component';

describe('RegisterClientNaturalComponent', () => {
  let component: RegisterClientNaturalComponent;
  let fixture: ComponentFixture<RegisterClientNaturalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterClientNaturalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClientNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
