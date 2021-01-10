import {Action, createReducer, on} from '@ngrx/store';
import quoteActions from '../actions/quotes.actions';
import {AppState} from '../models/kanye.interface';

export const appState: AppState = {
  headline: "What's on Ye's mind?",
  button: "Ye's thoughts",
  splyCode: 'SPLY-//YEMVMT-2020',
  uspeCode: 'VOTE//4YE-2020:USPE',
  quote: null,
  author: 'Kanye West',
  image: 'ye-1',
  loading: false,
  error: false,
};

const quoteReducer = createReducer(
  appState,
  on(quoteActions.getQuotes, (state) => ({...state, loading: true})),
  on(quoteActions.getQuotesSuccess, (state, kanyeQuote) => ({...state, ...kanyeQuote, loading: false})),
  on(quoteActions.getQuotesFailed, (state, error) => ({...state, ...error, loading: false}))
);

const quoteReducers = function reducer(state: any | undefined, action: Action) {
  return quoteReducer(state, action);
};

export default quoteReducers;
