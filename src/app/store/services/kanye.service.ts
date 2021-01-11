import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {KanyeQuotes} from '../models/kanye.interface';

@Injectable({
  providedIn: 'root',
})
export class KanyeService {
  private ep = environment.API_URL;
  constructor(private http: HttpClient) {}
  private generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getQuotes(): Observable<KanyeQuotes> {
    return this.http
      .get<KanyeQuotes>(this.ep, {responseType: 'json'})
      .pipe(
        map((quotes) => {
          const kanyeQuotes: KanyeQuotes = {
            quote: quotes.quote,
            image: `ye-${this.generateRandomNumber(1, 6)}`,
          };
          return kanyeQuotes;
        })
      );
  }
}
