import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridicalComponent } from './juridical.component';

describe('JuridicalComponent', () => {
  let component: JuridicalComponent;
  let fixture: ComponentFixture<JuridicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuridicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuridicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
