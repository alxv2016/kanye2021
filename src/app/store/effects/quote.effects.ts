import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, delay, map, mergeMap} from 'rxjs/operators';
import quoteActions from '../actions/quotes.actions';
import {KanyeService} from '../services/kanye.service';

@Injectable()
export class QuoteEffects {
  constructor(private actions$: Actions, private service: KanyeService) {}
  getQuotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(quoteActions.getQuotes),
      mergeMap(() =>
        this.service.getQuotes().pipe(
          // fake a delay for animations
          delay(675),
          map((quote) => quoteActions.getQuotesSuccess(quote)),
          catchError(() => of(quoteActions.getQuotesFailed({error: true})))
        )
      )
    )
  );
}
