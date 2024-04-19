import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureHeaderContentComponent } from '../../features/feature-header-content/feature-header-content.component';
import { CommonModule } from '@angular/common';
import { DetailsService } from '../../../service/details.service';
import { IDetails, Section } from '../../../models/details';

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
 
  activeHeaderContent?: Section;
  activeIndex?: number;
  dataDetails?: IDetails[];

  constructor(
    private detailsService: DetailsService,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() { 
    this.detailsService.getDetails()
    .subscribe(res => {
      this.dataDetails = res; 
    })
  }
  handleActiveItem(item: IDetails) {
    this.activeHeaderContent = item.section;
    this.activeIndex = item.id; 
    this.changeDetectorRefs.detectChanges();
  }
 
  @HostListener('document:click', ['$event'])
  clickout(event: PointerEvent) { 
    if (!this.listElements.some(element => element.nativeElement.contains(event.target))) {
      this.activeHeaderContent = undefined;
      this.activeIndex = undefined;
      this.changeDetectorRefs.detectChanges(); 
    }  
  }
}
