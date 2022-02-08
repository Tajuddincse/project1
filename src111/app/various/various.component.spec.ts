import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VARIOUSComponent } from './various.component';

describe('VARIOUSComponent', () => {
  let component: VARIOUSComponent;
  let fixture: ComponentFixture<VARIOUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VARIOUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VARIOUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
