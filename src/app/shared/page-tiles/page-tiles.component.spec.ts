import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTilesComponent } from './page-tiles.component';

describe('PageTilesComponent', () => {
  let component: PageTilesComponent;
  let fixture: ComponentFixture<PageTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
