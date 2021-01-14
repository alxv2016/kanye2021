import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {State} from 'src/app/store/reducers/quotes.reducer';

@Component({
  selector: 'kanye-quotes',
  templateUrl: './kanye-quotes.component.html',
  styleUrls: ['./kanye-quotes.component.scss'],
})
export class KanyeQuotesComponent {
  @HostBinding('class') class = 'kanye-quote-card';
  @Input() data: State | undefined;
}
