import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LODGINGComponent } from './lodging.component';

describe('LODGINGComponent', () => {
  let component: LODGINGComponent;
  let fixture: ComponentFixture<LODGINGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LODGINGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LODGINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
