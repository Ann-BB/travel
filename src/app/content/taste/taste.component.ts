import { Component } from '@angular/core'; 
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ICard } from '../../models/card.model';
import { ICardConfig } from '../../models/card.config';
import { InfoCardComponent } from '../../features/info-card/info-card.component';

@Component({
  selector: 'app-taste',
  standalone: true,
  imports: [TranslateModule, InfoCardComponent, FontAwesomeModule],
  templateUrl: './taste.component.html',
  styleUrl: './taste.component.scss'
})
export class TasteComponent {

  faArrowRight = faArrowRight;
  
  tasteData: ICard[] = [
    {
      imgBg: "assets/img/khachapuri.jpg",
      title: "TASTE_TITLE_0",
      describe: "", 
    },
    {
      imgBg: "assets/img/mtsvadi.jpg",
      title: "TASTE_TITLE_1",
      describe: "" 
    }, 
  ]

    
  cardConfig: ICardConfig = { 
    widthSize: '22em',
    heightSize: '26.5em'
  }
}
