import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONSUMPTIONComponent } from './consumption.component';

describe('CONSUMPTIONComponent', () => {
  let component: CONSUMPTIONComponent;
  let fixture: ComponentFixture<CONSUMPTIONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONSUMPTIONComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CONSUMPTIONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
