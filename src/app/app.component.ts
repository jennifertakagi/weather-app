import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'How\'s the Weather?';
  public citiesToShow: string[] = ['Amsterdam', 'London', 'Krakow', 'Brussels', 'Bristol'];

  constructor() {}
}
