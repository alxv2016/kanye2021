import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, Subject} from 'rxjs';
import {catchError, map, mergeMap, repeatWhen, takeUntil, tap} from 'rxjs/operators';
import * as fromPollingActions from '../actions/polling.actions';
import {PollingService} from '../services/polling.service';

@Injectable()
export class PollingEffects {
  pollingEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPollingActions.loadPollings),
      mergeMap((m) =>
        this.service.autoPolling(m.duration).pipe(
          map(
            (timing) => fromPollingActions.loadPollingsSuccess({data: timing}),
            catchError(() => of(fromPollingActions.loadPollingsFailure))
          )
        )
      )
    )
  );

  stopPollingEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromPollingActions.stopPolling),
        tap(() => this.service.stopPolling())
      ),
    {dispatch: false}
  );

  constructor(private actions$: Actions, private service: PollingService) {}
}
