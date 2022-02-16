import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ORGANIZATIONSComponent } from './organizations.component';

describe('ORGANIZATIONSComponent', () => {
  let component: ORGANIZATIONSComponent;
  let fixture: ComponentFixture<ORGANIZATIONSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ORGANIZATIONSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ORGANIZATIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
