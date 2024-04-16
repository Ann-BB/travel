import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IImgContent, IList, ISections } from '../../../models/hedaer-list';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../info-card/info-card.component';
import { ICardConfig } from '../../../models/card.config';
import { TranslateModule } from '@ngx-translate/core';
import { SocialInfoComponent } from '../social-info/social-info.component';

@Component({
  selector: 'app-feature-header-content',
  standalone: true,
  imports: [CommonModule, TranslateModule, InfoCardComponent, SocialInfoComponent],
  templateUrl: './feature-header-content.component.html',
  styleUrl: './feature-header-content.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureHeaderContentComponent implements OnInit {

  @Input('activeHeaderContent') content?: ISections;
  list?: IList;
  imgContent?: IImgContent[];
  cardConfig: ICardConfig = { 
    widthSize: '252px',
    heightSize: '300px'
  }
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['content']) {
      this.runThisLogic();
    }
  }
  runThisLogic(): void {
    // logic in here
    this.list = this.content?.list;
    this.imgContent = this.content?.imgContent;
    console.log(this.content, "activeHeaderContent", this.list, "this.list")

  }
}
