import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { ViewSliderComponent } from '../view-slider/view-slider.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [TextComponent, ViewSliderComponent, TranslateModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

}
