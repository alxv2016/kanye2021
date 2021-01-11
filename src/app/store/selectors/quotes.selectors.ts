import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '..';
import {quotesFeatureKey, State} from '../reducers/quotes.reducer';

export const selectQuotesFeature = createFeatureSelector<State>(quotesFeatureKey);
export const selectQuote = createSelector(selectQuotesFeature, (state: State) => state.quote);
