import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVAILABILITYComponent } from './availability.component';

describe('AVAILABILITYComponent', () => {
  let component: AVAILABILITYComponent;
  let fixture: ComponentFixture<AVAILABILITYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVAILABILITYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVAILABILITYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
