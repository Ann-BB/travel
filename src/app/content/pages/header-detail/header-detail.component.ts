import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-detail',
  standalone: true,
  imports: [ ],
  templateUrl: './header-detail.component.html',
  styleUrl: './header-detail.component.scss'
})
export class HeaderDetailComponent {

  id : any;
  constructor(private activatedRoute: ActivatedRoute) {
   
  }
  ngOnInit() { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }
}
