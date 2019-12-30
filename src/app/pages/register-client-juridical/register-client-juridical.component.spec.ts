import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClientJuridicalComponent } from './register-client-juridical.component';

describe('RegisterClientJuridicalComponent', () => {
  let component: RegisterClientJuridicalComponent;
  let fixture: ComponentFixture<RegisterClientJuridicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterClientJuridicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClientJuridicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
