import { Component, Input } from '@angular/core';
import { ICard } from '../../../models/card.model';
import { ICardConfig } from '../../../models/card.config';
import { TranslateModule } from '@ngx-translate/core';
import { faHeart,   } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [TranslateModule, FontAwesomeModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() slide?: ICard;
  @Input() cardConfig?: ICardConfig;

  faHeart = faHeart;


}
