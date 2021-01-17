import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '..';
import {pollingFeatureKey, PollingState} from '../reducers/polling.reducer';

export const selectPollingFeature = createFeatureSelector<AppState, PollingState>(pollingFeatureKey);

export const selectPollingPercent = createSelector(selectPollingFeature, (state: PollingState) => state.percent);
