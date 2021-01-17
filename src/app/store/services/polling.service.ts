import {Injectable} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {delay, map, repeatWhen, takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PollingService {
  private stop = new Subject();
  private start = new Subject();

  autoPolling(duration: number) {
    let interval = (duration * 10) / 3;
    return timer(100, interval > 100 ? interval : (interval = 100)).pipe(
      takeUntil(this.stop),
      repeatWhen(() => this.start),
      map((seconds) => {
        if (seconds > duration) {
          this.stop.next();
          this.start.next();
        }
        let percentage = Math.floor((seconds / duration) * 100);
        const timer = {
          duration: duration,
          seconds: seconds,
          percent: percentage <= 100 ? percentage : (percentage = 100),
        };
        return timer;
      })
    );
  }

  stopPolling() {
    this.stop.next();
  }

  startPolling() {
    this.start.next();
  }
}
