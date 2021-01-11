import {Action, createReducer, on} from '@ngrx/store';
import * as fromQuoteActions from '../actions/quotes.actions';
import {KanyeQuotes} from '../models/kanye.interface';

export const quotesFeatureKey = 'quotes';

export interface State extends KanyeQuotes {
  headline: string;
  button: string;
  splyCode: string;
  uspeCode: string;
  author: string;
  loading: boolean;
  error: boolean;
}

export const initialState: State = {
  headline: '',
  button: '',
  splyCode: '',
  uspeCode: '',
  quote: null,
  author: '',
  image: 'ye-1',
  loading: false,
  error: false,
};

export const reducer = createReducer(
  initialState,
  on(fromQuoteActions.loadQuotes, (state) => ({...state, loading: true})),
  on(fromQuoteActions.loadQuotesSuccess, (state, {quote}) => ({...state, ...quote, loading: false})),
  on(fromQuoteActions.loadQuotesFailure, (state) => ({...state, error: true}))
);
