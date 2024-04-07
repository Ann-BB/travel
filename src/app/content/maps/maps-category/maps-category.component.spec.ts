import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsCategoryComponent } from './maps-category.component';

describe('MapsCategoryComponent', () => {
  let component: MapsCategoryComponent;
  let fixture: ComponentFixture<MapsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
