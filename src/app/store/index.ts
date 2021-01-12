import {ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromQuotes from './reducers/quotes.reducer';

export interface AppState {
  [fromQuotes.quotesFeatureKey]: fromQuotes.State;
}
export const reducers: ActionReducerMap<AppState> = {[fromQuotes.quotesFeatureKey]: fromQuotes.reducer};
// Meta reducers are pre-process any action before normal reducers are invoked like interceptors
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
