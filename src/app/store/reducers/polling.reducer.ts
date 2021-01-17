import {Action, createReducer, on} from '@ngrx/store';
import * as fromPollingActions from '../actions/polling.actions';

export const pollingFeatureKey = 'polling';

export interface PollingState {
  duration: number;
  seconds: number;
  percent: number;
}

export const initialState: PollingState = {
  duration: 0,
  seconds: 0,
  percent: 0,
};

export const reducer = createReducer(
  initialState,
  on(fromPollingActions.loadPollings, (state, {duration}) => ({...state, totalTime: duration})),
  on(fromPollingActions.loadPollingsSuccess, (state, {data}) => ({...state, ...data})),
  on(fromPollingActions.loadPollingsFailure, (state) => ({...state})),
  on(fromPollingActions.stopPolling, (state) => ({...state}))
);
