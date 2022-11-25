import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalclibComponent } from './calclib.component';

describe('CalclibComponent', () => {
  let component: CalclibComponent;
  let fixture: ComponentFixture<CalclibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalclibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalclibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
