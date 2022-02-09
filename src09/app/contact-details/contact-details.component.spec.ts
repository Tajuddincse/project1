import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CONTACTDETAILSComponent } from './contact-details.component';

describe('CONTACTDETAILSComponent', () => {
  let component: CONTACTDETAILSComponent;
  let fixture: ComponentFixture<CONTACTDETAILSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CONTACTDETAILSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CONTACTDETAILSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
