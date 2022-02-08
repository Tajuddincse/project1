import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROFESSIONALDATAComponent } from './professional-data.component';

describe('PROFESSIONALDATAComponent', () => {
  let component: PROFESSIONALDATAComponent;
  let fixture: ComponentFixture<PROFESSIONALDATAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PROFESSIONALDATAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PROFESSIONALDATAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
