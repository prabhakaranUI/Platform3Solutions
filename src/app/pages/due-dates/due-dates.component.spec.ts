import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDatesComponent } from './due-dates.component';

describe('DueDatesComponent', () => {
  let component: DueDatesComponent;
  let fixture: ComponentFixture<DueDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
