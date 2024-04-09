import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineBgComponent } from './wine-bg.component';

describe('WineBgComponent', () => {
  let component: WineBgComponent;
  let fixture: ComponentFixture<WineBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WineBgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WineBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
