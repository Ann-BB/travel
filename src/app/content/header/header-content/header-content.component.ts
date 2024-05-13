import { Component } from '@angular/core';
import { HeaderListComponent } from '../header-list/header-list.component';
import { HeaderIconsComponent } from '../header-icons/header-icons.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { RouterModule } from '@angular/router';
import { GeneralService } from '../../../service/general.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule, HeaderListComponent, HeaderIconsComponent, MatSidenavModule, MatButtonModule],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {
  fixed: boolean = false
  SideBarShow = false;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.handleScroll();
  }

  constructor(
    public generalService: GeneralService,
  ) { }

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

  toggleSideBar() {
    this.SideBarShow = !this.SideBarShow;
    console.log(this.SideBarShow, "SideBarShow")
  }

}
