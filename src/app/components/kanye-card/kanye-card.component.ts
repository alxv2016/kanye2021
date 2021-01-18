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

@Component({
  selector: 'kanye-card',
  templateUrl: './kanye-card.component.html',
  styleUrls: ['./kanye-card.component.scss'],
})
export class KanyeCardComponent implements AfterViewInit {
  @HostBinding('class') class = 'kanye-card';
  @Input() data: State | undefined;
  @ViewChildren('wave', {read: ElementRef}) waves!: QueryList<ElementRef>;
  @ViewChild('wave') wave!: ElementRef;
  constructor() {}

  ngAfterViewInit() {
    const waves = this.waves.map((wave) => wave.nativeElement);
    // this.waves.forEach(wave => {
    //   console.log(wave.nativeElement);
    //   // gsap.from(wave.nativeElement, {
    //   //   duration: 0.45,
    //   //   ease: 'back',
    //   //   stagger: 0.65,
    //   //   scale: 0.45,
    //   //   repeat: -1,
    //   //   yoyo: true,
    //   // });
    // });
    console.log(waves);
    gsap.from(waves, {
      duration: 0.45,
      ease: 'back',
      stagger: 0.65,
      scale: 0.45,
      repeat: -1,
      yoyo: true,
    });
  }
}
