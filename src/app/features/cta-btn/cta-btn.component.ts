import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cta-btn',
  standalone: true,
  imports: [TranslateModule, FontAwesomeModule],
  templateUrl: './cta-btn.component.html',
  styleUrl: './cta-btn.component.scss'
})
export class CtaBtnComponent {
  ctaUrl: string = '';
  faArrowRight = faArrowRight;
  @Input() isTransperent: boolean = true;
}
