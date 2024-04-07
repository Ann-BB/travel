import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeazonComponent } from './seazon.component';

describe('SeazonComponent', () => {
  let component: SeazonComponent;
  let fixture: ComponentFixture<SeazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeazonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
