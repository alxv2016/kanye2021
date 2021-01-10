export interface KanyeQuotes {
  quote: string | null;
  author?: string;
  image?: string;
  loading?: boolean;
  error?: boolean;
}

export interface AppState extends KanyeQuotes {
  headline: string;
  button: string;
  splyCode: string;
  uspeCode: string;
}
