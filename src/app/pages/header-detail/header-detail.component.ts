import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MainSliderItemComponent } from '../../content/main-slider/main-slider-item/main-slider-item.component';

@Component({
  selector: 'app-header-detail',
  standalone: true,
  imports: [MainSliderItemComponent],
  templateUrl: './header-detail.component.html',
  styleUrl: './header-detail.component.scss'
})
export class HeaderDetailComponent {

  id: any;
  item: any = {
    imgBg: "assets/img/main-slider-0.jpg",
    title: "TITLE_0",
    describe: "DESC_0"
  }

  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }
}
