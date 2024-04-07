import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeazonHeaderComponent } from './seazon-header.component';

describe('SeazonHeaderComponent', () => {
  let component: SeazonHeaderComponent;
  let fixture: ComponentFixture<SeazonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeazonHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeazonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
