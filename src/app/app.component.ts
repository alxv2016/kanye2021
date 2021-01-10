import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from './store/models/kanye.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kanye2021';
  state$: Observable<AppState> | undefined;

  constructor(private store: Store<AppState>) {}
  ngOnInit() {}
}
