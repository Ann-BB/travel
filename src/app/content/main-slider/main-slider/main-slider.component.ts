import { CommonModule } from '@angular/common';
import { Component,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { MainSliderItemComponent } from '../main-slider-item/main-slider-item.component'; 
@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [CommonModule, MainSliderItemComponent ],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class MainSliderComponent {   

  mainSlider: any[] = [
    {
      imgBg: "assets/img/main-slider-0.jpg",
      title: "TITLE_0",
      describe: "DESC_0",
      ctaUrlFirst: "https://travel-theta-ecru.vercel.app/",
      ctaUrlSecond: "https://georgia.travel/regions/kakheti"
    },
    {
      imgBg: "assets/img/main-slider-1.jpg",
      title: "TITLE_1",
      describe: "DESC_1",
      ctaUrlFirst: "https://travel-theta-ecru.vercel.app/",
      ctaUrlSecond: "https://georgia.travel/regions/kakheti"
    },
    {
      imgBg: "assets/img/main-slider-2.jpg",
      title: "TITLE_2",
      describe: "DESC_2",
      ctaUrlFirst: "https://travel-theta-ecru.vercel.app/",
      ctaUrlSecond: "https://georgia.travel/regions/kakheti"
    }
  ]

  constructor() {}  
 
}
