import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {KanyeService} from '../services/kanye.service';
import * as fromQuotesActions from '../actions/quotes.actions';
import {delay, mergeMap, map, catchError, tap, switchMap, scan, takeUntil} from 'rxjs/operators';
import {interval, of, timer} from 'rxjs';

@Injectable()
export class QuotesEffects {
  quotesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromQuotesActions.loadQuotes),
      mergeMap((m) =>
        this.service.getQuotes().pipe(
          // faking slower server response time for the purpose of demoing loading
          delay(1000),
          map((quote) => fromQuotesActions.loadQuotesSuccess({quote: quote})),
          catchError(() => of(fromQuotesActions.loadQuotesFailure({error: true})))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: KanyeService) {}
}
