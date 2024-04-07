import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { InfoCardComponent } from '../../features/info-card/info-card.component';
import { CommonModule } from '@angular/common';
import { ICard } from '../../../models/card.model';
import { ICardConfig } from '../../../models/card.config';

@Component({
  selector: 'app-view-slider',
  standalone: true,
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './view-slider.component.html',
  styleUrl: './view-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewSliderComponent {

  viewSlider: ICard[] = [
    {
      imgBg: "assets/img/card-0.jpg",
      title: "CARD_TITLE_0",
      describe: "CARD_DESC_0",
      isFavorite: false,
      loveIcon: true,
    },
    {
      imgBg: "assets/img/card-1.jpg",
      title: "CARD_TITLE_1",
      describe: "CARD_DESC_1",
      isFavorite: false,
      loveIcon: true,
    },
    {
      imgBg: "assets/img/card-2.jpg",
      title: "CARD_TITLE_2",
      describe: "CARD_DESC_2",
      isFavorite: false,
      loveIcon: true,
    },
    {
      imgBg: "assets/img/card-3.jpg",
      title: "CARD_TITLE_3",
      describe: "CARD_DESC_3",
      isFavorite: false,
      loveIcon: true,
    },
    {
      imgBg: "assets/img/card-4.jpg",
      title: "CARD_TITLE_4",
      describe: "CARD_DESC_4",
      isFavorite: false,
      loveIcon: true,
    },
    {
      imgBg: "assets/img/card-5.jpg",
      title: "CARD_TITLE_5",
      describe: "CARD_DESC_5",
      isFavorite: false,
      loveIcon: true,
    },
    {
      imgBg: "assets/img/card-6.jpg",
      title: "CARD_TITLE_6",
      describe: "CARD_DESC_6",
      isFavorite: false,
      loveIcon: true,
    },
    {
      imgBg: "assets/img/card-7.jpg",
      title: "CARD_TITLE_7",
      describe: "CARD_DESC_7",
      isFavorite: false,
      loveIcon: true,
    },
  ]
  cardConfig: ICardConfig = { 
    widthSize: '320px',
    heightSize: '390px'
  }
}
