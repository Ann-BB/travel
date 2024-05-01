import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureHeaderContentComponent } from './feature-header-content.component';

describe('FeatureHeaderContentComponent', () => {
  let component: FeatureHeaderContentComponent;
  let fixture: ComponentFixture<FeatureHeaderContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureHeaderContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureHeaderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
