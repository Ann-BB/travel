import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, SimpleChanges } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from '../info-card/info-card.component';
import { ICardConfig } from '../../../models/card.config';
import { TranslateModule } from '@ngx-translate/core';
import { SocialInfoComponent } from '../social-info/social-info.component';
import {  RouterModule } from '@angular/router';
import { Categories, ImgContent, Section } from '../../../models/details';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feature-header-content',
  standalone: true,
  imports: [CommonModule, TranslateModule, InfoCardComponent, SocialInfoComponent, RouterModule ],
  templateUrl: './feature-header-content.component.html',
  styleUrl: './feature-header-content.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureHeaderContentComponent implements OnInit { 
  @Input('activeHeaderContent') content?: Section;
  categories?: Categories;
  categoryList?: any;
  imgContent?: ImgContent[];

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
    this.categories = this.content?.categories;
    this.imgContent = this.content?.imgContent;
    // this.categoryList = this.content?.categories.category_1
    console.log(  this.categories, )

  }
}
