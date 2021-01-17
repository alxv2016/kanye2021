import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KanyeContainerComponent} from './kanye-container/kanye-container.component';
import {KanyeCardComponent} from './kanye-card/kanye-card.component';
import {KanyeQuotesComponent} from './kanye-quotes/kanye-quotes.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [KanyeContainerComponent, KanyeCardComponent, KanyeQuotesComponent, ProgressBarComponent],
  exports: [KanyeContainerComponent, KanyeCardComponent, KanyeQuotesComponent, ProgressBarComponent],
  imports: [CommonModule],
})
export class KanyeModule {}
