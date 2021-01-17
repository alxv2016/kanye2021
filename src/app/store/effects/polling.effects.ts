import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of, Subject, timer} from 'rxjs';
import {catchError, map, mergeMap, repeatWhen, takeUntil, tap} from 'rxjs/operators';
import * as fromPollingActions from '../actions/polling.actions';

@Injectable()
export class PollingEffects {
  stop = new Subject();
  start = new Subject();
  pollingEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromPollingActions.loadPollings),
      mergeMap((m) =>
        timer(0, 1000).pipe(
          takeUntil(this.stop),
          repeatWhen(() => this.start),
          map((v) => {
            console.log(m.duration, v);
            const timing = {
              totalTime: m.duration,
              currentTime: v,
              percentage: Math.round((v / m.duration) * 100),
            };
            if (v > m.duration) {
              this.stop.next();
              this.start.next();
            }
            return fromPollingActions.loadPollingsSuccess({data: timing});
          }),
          catchError(() => of(fromPollingActions.loadPollingsFailure))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
