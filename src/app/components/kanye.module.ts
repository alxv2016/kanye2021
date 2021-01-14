import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KanyeContainerComponent} from './kanye-container/kanye-container.component';
import {KanyeCardComponent} from './kanye-card/kanye-card.component';
import {KanyeQuotesComponent} from './kanye-quotes/kanye-quotes.component';

@NgModule({
  declarations: [KanyeContainerComponent, KanyeCardComponent, KanyeQuotesComponent],
  exports: [KanyeContainerComponent, KanyeCardComponent, KanyeQuotesComponent],
  imports: [CommonModule],
})
export class KanyeModule {}
