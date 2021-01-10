import {createSelector} from '@ngrx/store';
import {AppState} from '../models/kanye.interface';

const quoteSelector = createSelector(
  (state: AppState) => state,
  (state: AppState) => state
);
export default quoteSelector;
