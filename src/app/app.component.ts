import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './store';
import {loadQuotes} from './store/actions/quotes.actions';
import {State} from './store/reducers/quotes.reducer';
import {selectQuote, selectQuotesFeature} from './store/selectors/quotes.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kanye2021';
  state$: Observable<State> | undefined;
  quote$: Observable<string | null> | undefined;

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(loadQuotes());
    this.quote$ = this.store.pipe(select(selectQuote));
    this.state$ = this.store.pipe(select(selectQuotesFeature));
    this.quote$.subscribe((quote) => console.log(quote));
    this.state$.subscribe((data) => console.log(data));
  }
}
