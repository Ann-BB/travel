import { Component, ElementRef, HostListener, Inject, OnDestroy, ViewChild } from '@angular/core';
import { HeaderListComponent } from '../header-list/header-list.component';
import { HeaderIconsComponent } from '../header-icons/header-icons.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Observable, Subscription, debounceTime, distinctUntilChanged, filter, fromEvent, map, pairwise, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { GeneralService } from '../../../service/general.service';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, HeaderListComponent, HeaderIconsComponent],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {
  // public sticky$?: Observable<boolean>;
  fixed: boolean = false
  resizeSubscription$!: Subscription;
  resizeWidth?: number;
  ngOnInit() {

    this.resizeWidth = window.innerWidth;
  }
  ngAfterViewInit() { 
    this.handleScroll();
    this.handleResize()
  }
  constructor(
    public generalService: GeneralService, 
  ){ }

  handleScroll() {
    fromEvent(document, "scroll", { passive: false }).pipe(
      debounceTime(50), 
      map(e => window.pageYOffset),  
      distinctUntilChanged()
    ).subscribe(res => {
      if (Math.abs(res) > 0) {
        this.fixed = true;
      } else if (Math.abs(res) == 0) {
        this.fixed = false;
      } 
    });
  }

  private handleResize() {
    this.resizeSubscription$ = fromEvent(window, 'resize') 
      .pipe(
        map(() => window.innerWidth),
        distinctUntilChanged(),
        debounceTime(1000)
      )
      .subscribe(() => { 
        this.resizeWidth = window.innerWidth;
      });
  } 

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }
}
