import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store';
import {EffectsModule} from '@ngrx/effects';
import {QuotesEffects} from './store/effects/quotes.effects';
import {KanyeModule} from './components/kanye.module';
import {PollingEffects} from './store/effects/polling.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([QuotesEffects, PollingEffects]),
    KanyeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
