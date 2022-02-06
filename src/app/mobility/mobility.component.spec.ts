import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOBILITYComponent } from './mobility.component';

describe('MOBILITYComponent', () => {
  let component: MOBILITYComponent;
  let fixture: ComponentFixture<MOBILITYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MOBILITYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MOBILITYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
