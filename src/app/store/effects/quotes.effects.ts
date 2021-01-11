import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {KanyeService} from '../services/kanye.service';
import * as fromQuotesActions from '../actions/quotes.actions';
import {delay, mergeMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {KanyeQuotes} from '../models/kanye.interface';

@Injectable()
export class QuotesEffects {
  constructor(private actions$: Actions, private service: KanyeService) {}

  quotesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromQuotesActions.loadQuotes),
      mergeMap(() =>
        this.service.getQuotes().pipe(
          delay(675),
          map((quote) => fromQuotesActions.loadQuotesSuccess({quote: quote})),
          catchError(() => of(fromQuotesActions.loadQuotesFailure({error: true})))
        )
      )
    )
  );
}
