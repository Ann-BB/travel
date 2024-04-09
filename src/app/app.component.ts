import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderContentComponent } from './content/header/header-content/header-content.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { MainSliderComponent } from './content/main-slider/main-slider/main-slider.component';
import { ViewComponent } from './content/view/view/view.component';
import { SeazonComponent } from './content/seazon/seazon/seazon.component';
import { MapsComponent } from './content/maps/maps/maps.component';
import { TasteComponent } from './content/taste/taste.component';
import { WineBgComponent } from './content/wine-bg/wine-bg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TranslateModule, RouterOutlet, HeaderContentComponent, MainSliderComponent, ViewComponent, SeazonComponent, MapsComponent, TasteComponent, WineBgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'travel-app';
  constructor(public translate: TranslateService) {

  }
}
