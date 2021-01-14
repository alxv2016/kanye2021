import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {State} from 'src/app/store/reducers/quotes.reducer';

@Component({
  selector: 'kanye-card',
  templateUrl: './kanye-card.component.html',
  styleUrls: ['./kanye-card.component.scss'],
})
export class KanyeCardComponent {
  @HostBinding('class') class = 'kanye-card';
  @Input() data: State | undefined;
  constructor() {}
}
