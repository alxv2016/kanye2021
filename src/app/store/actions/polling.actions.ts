import {createAction, props} from '@ngrx/store';
import {State} from '../reducers/polling.reducer';

export const loadPollings = createAction('[Polling] Load Pollings', props<{duration: number}>());

export const loadPollingsSuccess = createAction('[Polling] Load Pollings Success', props<{data: State}>());

export const loadPollingsFailure = createAction('[Polling] Load Pollings Failure', props<{error: any}>());
