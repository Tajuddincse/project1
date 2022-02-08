import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PERSONALDATAComponent } from './personal-data.component';

describe('PERSONALDATAComponent', () => {
  let component: PERSONALDATAComponent;
  let fixture: ComponentFixture<PERSONALDATAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PERSONALDATAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PERSONALDATAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
