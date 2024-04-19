import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HedaerList, ISections } from '../../../models/hedaer-list';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureHeaderContentComponent } from '../../features/feature-header-content/feature-header-content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-list',
  standalone: true,
  imports: [TranslateModule, FeatureHeaderContentComponent],
  templateUrl: './header-list.component.html',
  styleUrl: './header-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderListComponent {

  @ViewChildren('list') listElements!: QueryList<ElementRef>;

  headerList: HedaerList[] = [
    {
      id: 0,
      title: "HEADER_TITLE_1",
      section: {
        list: {
          "TITLE_1_1": ["HEADER_TITLE_1_1", "HEADER_TITLE_1_2", "HEADER_TITLE_1_3", "HEADER_TITLE_1_4", "HEADER_TITLE_1_5", "HEADER_TITLE_1_6"],
          "TITLE_1_2": ["HEADER_TITLE_1_7", "HEADER_TITLE_1_8", "HEADER_TITLE_1_9", "HEADER_TITLE_1_10", "HEADER_TITLE_1_11", "HEADER_TITLE_1_12"],
          "TITLE_1_3": ["HEADER_TITLE_1_13", "HEADER_TITLE_1_14", "HEADER_TITLE_1_15", "HEADER_TITLE_1_16", "HEADER_TITLE_1_17", "HEADER_TITLE_1_18"]
        },
        imgContent: [
          {
            title: "HEADER_IMG_TITLE_1",
            imgBg: "assets/img/header-img-1" 
          }
        ]
      }
    },
    {
      id: 1,
      title: "HEADER_TITLE_2",
      section: {
        list: {
          "TITLE_2_1": ["HEADER_TITLE_2_1", "HEADER_TITLE_2_2", "HEADER_TITLE_2_3", "HEADER_TITLE_2_4", "HEADER_TITLE_2_5", "HEADER_TITLE_2_6"],
          "TITLE_2_2": ["HEADER_TITLE_2_7", "HEADER_TITLE_2_8", "HEADER_TITLE_2_9", "HEADER_TITLE_2_10", "HEADER_TITLE_2_11", "HEADER_TITLE_2_12"],
        },
      }
    },
    {
      id: 2,
      title: "HEADER_TITLE_3",
      section: {
        list: {
          "TITLE_3_1": ["HEADER_TITLE_3_1", "HEADER_TITLE_3_2", "HEADER_TITLE_3_3", "HEADER_TITLE_3_4", "HEADER_TITLE_3_5", "HEADER_TITLE_3_6"],
          "TITLE_3_2": ["HEADER_TITLE_3_7", "HEADER_TITLE_3_8", "HEADER_TITLE_3_9", "HEADER_TITLE_3_10", "HEADER_TITLE_3_11", "HEADER_TITLE_3_12"],
        },
        imgContent: [
          {
            title: "HEADER_IMG_TITLE_3",
            imgBg: "assets/img/header-img-1" 
          },
          {
            title: "HEADER_IMG_TITLE_3",
            imgBg: "assets/img/header-img-1"   
          }
        ]
      }
    },
    {
      id: 3,
      title: "HEADER_TITLE_4",
      section: {
        list: {
          "TITLE_4_1": ["HEADER_TITLE_4_1", "HEADER_TITLE_4_2", "HEADER_TITLE_4_3", "HEADER_TITLE_4_4", "HEADER_TITLE_4_5", "HEADER_TITLE_4_6"],
          "TITLE_4_2": ["HEADER_TITLE_4_7", "HEADER_TITLE_4_8", "HEADER_TITLE_4_9", "HEADER_TITLE_4_10", "HEADER_TITLE_4_11", "HEADER_TITLE_4_12"],
        },
        imgContent: [
          {
            title: "HEADER_IMG_TITLE_4",
            imgBg: "assets/img/header-img-1" 
          },
          {
            title: "HEADER_IMG_TITLE_4",
            imgBg: "assets/img/header-img-1" 
          }
        ]
      }
    },
  ]
  activeHeaderContent?: ISections;
  activeIndex?: number;
  constructor(private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleActiveItem(item: HedaerList) {
    this.activeHeaderContent = item.section;
    this.activeIndex = item.id;
    console.log(this.activeHeaderContent, "activeHeaderContent")
    this.changeDetectorRefs.detectChanges();
  }
 
  // @HostListener('document:click', ['$event'])
  // clickout(event: PointerEvent) { 
  //   if (!this.listElements.some(element => element.nativeElement.contains(event.target))) {
  //     this.activeHeaderContent = undefined;
  //     this.activeIndex = undefined;
  //     this.changeDetectorRefs.detectChanges(); 
  //   }  
  // }
}
