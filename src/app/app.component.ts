import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './store';
import {loadPollings, stopPolling} from './store/actions/polling.actions';
import {loadQuotes} from './store/actions/quotes.actions';
import {PollingState} from './store/reducers/polling.reducer';
import {State} from './store/reducers/quotes.reducer';
import {selectPollingFeature} from './store/selectors/polling.selectors';
import {selectQuotesFeature} from './store/selectors/quotes.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kanye2021';
  state$: Observable<State> | undefined;
  timer$: Observable<PollingState> | undefined;

  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.dispatch(loadQuotes());
    this.store.dispatch(loadPollings({duration: 60}));
    this.state$ = this.store.pipe(select(selectQuotesFeature));
    this.timer$ = this.store.pipe(select(selectPollingFeature));
    this.state$.subscribe((data) => console.log(data));
    this.timer$.subscribe((timer) => {
      if (timer.percent === 100) {
        this.store.dispatch(loadQuotes());
      }
    });
  }

  ngOnDestroy() {
    this.store.dispatch(stopPolling());
  }
}
