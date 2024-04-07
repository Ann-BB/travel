// import { AgmCoreModule  } from '@agm/core';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps'; 

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent {
  constructor() { }
  ngOnInit(): void { }
  display: any; // Property to store latitude and longitude data from the map
  center: google.maps.LatLngLiteral = {
    // Initial center coordinates for the map
    lat: 31.51679331043587,
    lng: 74.35149289364826
  };
  zoom = 4; // Initial zoom level for the map
  move(event: google.maps.MapMouseEvent) {
    // Method to handle map click event and update the display property
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }
}