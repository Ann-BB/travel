import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWithMapComponent } from './contact-with-map.component';

describe('ContactWithMapComponent', () => {
  let component: ContactWithMapComponent;
  let fixture: ComponentFixture<ContactWithMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactWithMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactWithMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
