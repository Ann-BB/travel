import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SeazonHeaderComponent } from '../seazon-header/seazon-header.component';
import { CommonModule } from '@angular/common';
import { ICard } from '../../../models/card.model';
import { ICardConfig } from '../../../models/card.config';
import { InfoCardComponent } from '../../features/info-card/info-card.component';

@Component({
  selector: 'app-seazon',
  standalone: true,
  imports: [CommonModule, TranslateModule, SeazonHeaderComponent, InfoCardComponent],
  templateUrl: './seazon.component.html',
  styleUrl: './seazon.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeazonComponent {

  seazonData: ICard[] = [
    {
      imgBg: "assets/img/seazon-spring.jpg",
      title: "SEAZON_TITLE_0",
      describe: "SEAZON_DESC_0", 
    },
    {
      imgBg: "assets/img/seazon-summer.jpg",
      title: "SEAZON_TITLE_1",
      describe: "SEAZON_DESC_1" 
    },
    {
      imgBg: "assets/img/seazon-autumn.jpg",
      title: "SEAZON_TITLE_2",
      describe: "SEAZON_DESC_2" 
    },
    {
      imgBg: "assets/img/seazon-winter.jpg",
      title: "SEAZON_TITLE_3",
      describe: "SEAZON_DESC_3" 
    } 
  ]

  
  cardConfig: ICardConfig = { 
    widthSize: '357px',
    heightSize: '485px'
  }
}
