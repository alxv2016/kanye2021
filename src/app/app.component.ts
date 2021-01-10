import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import quoteActions from './store/actions/quotes.actions';
import {AppState} from './store/models/kanye.interface';
import quoteSelector from './store/selectors/quote.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kanye2021';
  state$: Observable<AppState> | undefined;

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.state$ = this.store.select(quoteSelector);
    this.store.dispatch(quoteActions.getQuotes());
    this.state$.subscribe((data) => console.log(data));
  }
}
