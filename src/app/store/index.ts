import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromQuotes from './reducers/quotes.reducer';
import * as fromPolling from './reducers/polling.reducer';

export interface AppState {
  [fromQuotes.quotesFeatureKey]: fromQuotes.State;
  [fromPolling.pollingFeatureKey]: fromPolling.State;
}
export const reducers: ActionReducerMap<AppState> = {
  [fromQuotes.quotesFeatureKey]: fromQuotes.reducer,
  [fromPolling.pollingFeatureKey]: fromPolling.reducer,
};
// Meta reducers are pre-process any action before normal reducers are invoked like interceptors
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
