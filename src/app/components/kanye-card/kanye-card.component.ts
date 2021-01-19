import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {State} from 'src/app/store/reducers/quotes.reducer';
import {gsap} from 'gsap';
import {Observable} from 'rxjs';
import {AppState} from 'src/app/store';
import {select, Store} from '@ngrx/store';
import {selectLoadingStatus} from 'src/app/store/selectors/quotes.selectors';

@Component({
  selector: 'kanye-card',
  templateUrl: './kanye-card.component.html',
  styleUrls: ['./kanye-card.component.scss'],
})
export class KanyeCardComponent implements OnInit, AfterViewInit {
  @HostBinding('class') class = 'kanye-card';
  @Input() data: State | undefined;
  @ViewChildren('wave', {read: ElementRef}) waves!: QueryList<ElementRef>;
  loading$: Observable<boolean> | undefined;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.loading$ = this.store.pipe(select(selectLoadingStatus));
  }

  ngAfterViewInit() {
    const waves = this.waves.map((wave) => wave.nativeElement);
    const playWaves = gsap.from(waves, {
      ease: 'back',
      stagger: 0.175,
      scale: 0.25,
      yPercent: 60,
      opacity: 0,
    });
    this.loading$?.subscribe((bool) => {
      if (bool) {
        playWaves.play();
      } else {
        playWaves.reverse();
      }
    });
  }
}
