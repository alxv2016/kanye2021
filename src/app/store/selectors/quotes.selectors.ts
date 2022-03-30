import {createFeatureSelector, createSelector} from '@ngrx/store';
import {quotesFeatureKey, State} from '../reducers/quotes.reducer';
import {AppState} from '..';

// Type safe feature State that is only available in AppState below
export const selectQuotesFeature = createFeatureSelector<State>(quotesFeatureKey);
// Select a slice of the feature state
export const selectQuote = createSelector(selectQuotesFeature, (state: State) => state.quote);

export const selectLoadingStatus = createSelector(selectQuotesFeature, (state: State) => state.loading);
