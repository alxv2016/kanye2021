import {createAction, props} from '@ngrx/store';
import {KanyeQuotes} from '../models/kanye.interface';

// Best practice to describe actions by [Component that calls the action] + "The event that happens"
export const loadQuotes = createAction('[App Component] Load Quotes from kanye.rest');

export const loadQuotesSuccess = createAction(
  '[App Component] Load Quotes from kanye.rest Success',
  props<{quote: KanyeQuotes}>()
);

export const loadQuotesFailure = createAction(
  '[App Component] Load Quotes from kanye.rest Failure',
  props<{error: boolean}>()
);
