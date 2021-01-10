import {ActionReducerMap} from '@ngrx/store';
import quoteReducers from './quotes.reducers';

const reducers: ActionReducerMap<any> = {
  quoteReducers,
};
export default reducers;
