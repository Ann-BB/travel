import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core'; 
import { CtaBtnComponent } from '../../../features/cta-btn/cta-btn.component';

@Component({
  selector: 'app-main-slider-item',
  standalone: true,
  imports: [CommonModule, TranslateModule, FontAwesomeModule, CtaBtnComponent],
  templateUrl: './main-slider-item.component.html',
  styleUrl: './main-slider-item.component.scss'
})
export class MainSliderItemComponent {
  @Input() slide: any;
  faArrowRight = faArrowRight;

}
