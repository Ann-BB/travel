import { Component } from '@angular/core'; 
import { MainSliderComponent } from '../../main-slider/main-slider/main-slider.component';
import { ViewComponent } from '../../view/view/view.component';
import { SeazonComponent } from '../../seazon/seazon/seazon.component';
import { MapsComponent } from '../../maps/maps/maps.component';
import { TasteComponent } from '../../taste/taste.component';
import { WineBgComponent } from '../../wine-bg/wine-bg.component';
import { ContactComponent } from '../../contact/contact/contact.component';
import { ContactWithMapComponent } from '../../contact-with-map/contact-with-map.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MainSliderComponent, ViewComponent, SeazonComponent, MapsComponent, TasteComponent, WineBgComponent, ContactComponent, ContactWithMapComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
