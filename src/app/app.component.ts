import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './store';
import {loadPollings, stopPolling} from './store/actions/polling.actions';
import {loadQuotes} from './store/actions/quotes.actions';
import {State} from './store/reducers/quotes.reducer';
import {selectPollingPercent} from './store/selectors/polling.selectors';
import {selectQuotesFeature} from './store/selectors/quotes.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Kanye West 2021';
  progress = 0;
  state$: Observable<State> | undefined;
  timer$: Observable<number> | undefined;

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(loadQuotes());
    this.store.dispatch(loadPollings({duration: 40}));
    this.state$ = this.store.pipe(select(selectQuotesFeature));
    this.timer$ = this.store.pipe(select(selectPollingPercent));
    this.timer$.subscribe((per) => {
      this.progress = per;
      if (per >= 100) {
        this.store.dispatch(loadQuotes());
      }
    });
  }

  ngOnDestroy() {
    this.store.dispatch(stopPolling());
  }
}
