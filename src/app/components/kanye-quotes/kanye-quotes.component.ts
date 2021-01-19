import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from 'src/app/store';
import {State} from 'src/app/store/reducers/quotes.reducer';
import {selectLoadingStatus} from 'src/app/store/selectors/quotes.selectors';
import {gsap} from 'gsap';

@Component({
  selector: 'kanye-quotes',
  templateUrl: './kanye-quotes.component.html',
  styleUrls: ['./kanye-quotes.component.scss'],
})
export class KanyeQuotesComponent implements OnInit, AfterViewInit {
  @HostBinding('class') class = 'kanye-quote-card';
  @Input() data: State | undefined;
  @ViewChild('quoteIcon') quoteIcon!: ElementRef;
  @ViewChild('quoteAuthor') quoteAuthor!: ElementRef;
  loading$: Observable<boolean> | undefined;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.loading$ = this.store.pipe(select(selectLoadingStatus));
  }

  ngAfterViewInit() {
    const quoteIcon = gsap.from(this.quoteIcon.nativeElement, {
      ease: 'back',
      scale: 0.25,
      opacity: 0,
    });

    const quoteAuthor = gsap.from(this.quoteAuthor.nativeElement, {
      ease: 'back',
      delay: 1.75,
      scale: 0.25,
      opacity: 0,
    });
    this.loading$?.subscribe((bool) => {
      if (bool) {
        quoteIcon.restart();
        quoteAuthor.restart();
      }
    });
  }
}
