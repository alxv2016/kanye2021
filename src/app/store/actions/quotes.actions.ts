import {createAction, props} from '@ngrx/store';
import {KanyeQuotes} from '../models/kanye.interface';

const quoteActions = {
  getQuotes: createAction('[KANYE API] Retrieving quotes from kanye.rest'),
  getQuotesSuccess: createAction('[KANYE API] Got quotes from kanye.rest', props<KanyeQuotes>()),
  getQuotesFailed: createAction('[KANYE API] Failed to get quotes from kanye.rest', props<{error: boolean}>()),
};

export default quoteActions;
