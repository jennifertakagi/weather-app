import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'How\'s the Weather?';
  public citiesToShow = ['Amsterdam', 'London', 'Dubai', 'Toronto', 'Singapore'];

  constructor() {}
}
