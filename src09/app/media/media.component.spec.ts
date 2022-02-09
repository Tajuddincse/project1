import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEDIAComponent } from './media.component';

describe('MEDIAComponent', () => {
  let component: MEDIAComponent;
  let fixture: ComponentFixture<MEDIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEDIAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MEDIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
