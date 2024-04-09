import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-wine-bg',
  standalone: true,
  imports: [TranslateModule, FontAwesomeModule],
  templateUrl: './wine-bg.component.html',
  styleUrl: './wine-bg.component.scss'
})
export class WineBgComponent {
  faArrowRight = faArrowRight;

}
