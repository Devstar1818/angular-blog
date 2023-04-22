import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() id: string = '0';
  @Input() cardType: string = 'card-small';
  @Input() cardCover: string = './../../../../assets/images/cover-error.jpg';
  @Input() cardCoverAlt: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() cardTags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
