import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAYTODAYComponent } from './day-to-day.component';

describe('DAYTODAYComponent', () => {
  let component: DAYTODAYComponent;
  let fixture: ComponentFixture<DAYTODAYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAYTODAYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAYTODAYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
