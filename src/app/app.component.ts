import {Component, OnInit} from '@angular/core';
import {KanyeService} from './store/services/kanye.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kanye2021';
  constructor(private service: KanyeService) {}
  ngOnInit() {
    this.service.getQuotes().subscribe((data) => console.log(data));
  }
}
