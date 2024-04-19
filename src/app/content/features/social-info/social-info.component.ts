import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SocialIconsComponent } from '../social-icons/social-icons.component';

@Component({
  selector: 'app-social-info',
  standalone: true,
  imports: [TranslateModule, SocialIconsComponent],
  templateUrl: './social-info.component.html',
  styleUrl: './social-info.component.scss'
})
export class SocialInfoComponent {

}
