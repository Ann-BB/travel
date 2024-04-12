import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, SimpleChanges, input } from '@angular/core';
import { IList, ISections } from '../../../models/hedaer-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-header-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-header-content.component.html',
  styleUrl: './feature-header-content.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatureHeaderContentComponent implements OnInit {

  @Input('activeHeaderContent') content?: ISections;
  list?: IList;
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
    console.log(this.content, "activeHeaderContent", this.list, "this.list")

  }
}
