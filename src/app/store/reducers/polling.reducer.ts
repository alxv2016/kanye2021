import {Action, createReducer, on} from '@ngrx/store';
import * as fromPollingActions from '../actions/polling.actions';

export const pollingFeatureKey = 'polling';

export interface State {
  totalTime: number;
  currentTime: number;
  percentage: number;
}

export const initialState: State = {
  totalTime: 0,
  currentTime: 0,
  percentage: 0,
};

export const reducer = createReducer(
  initialState,
  on(fromPollingActions.loadPollings, (state, {duration}) => ({...state, totalTime: duration})),
  on(fromPollingActions.loadPollingsSuccess, (state, {data}) => ({...state, ...data})),
  on(fromPollingActions.loadPollingsFailure, (state) => ({...state}))
);
