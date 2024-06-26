import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSliderComponent } from './view-slider.component';

describe('ViewSliderComponent', () => {
  let component: ViewSliderComponent;
  let fixture: ComponentFixture<ViewSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
