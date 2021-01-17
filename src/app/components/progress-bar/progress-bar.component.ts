import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'progress-bar',
  template: ` <progress [max]="maxValue" [value]="currentValue"></progress> `,
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() maxValue: number = 100;
  @Input() currentValue: number = 0;
}
