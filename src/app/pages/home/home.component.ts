import { Component } from '@angular/core';  
import { MainSliderComponent } from '../../content/main-slider/main-slider/main-slider.component';
import { ViewComponent } from '../../content/view/view/view.component';
import { SeazonComponent } from '../../content/seazon/seazon/seazon.component';
import { MapsComponent } from '../../content/maps/maps/maps.component';
import { TasteComponent } from '../../content/taste/taste.component';
import { WineBgComponent } from '../../content/wine-bg/wine-bg.component';
import { ContactComponent } from '../../content/contact/contact/contact.component';
import { ContactWithMapComponent } from '../../content/contact-with-map/contact-with-map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MainSliderComponent, ViewComponent, SeazonComponent, MapsComponent, TasteComponent, WineBgComponent, ContactComponent, ContactWithMapComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
