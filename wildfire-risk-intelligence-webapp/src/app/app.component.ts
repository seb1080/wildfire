import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'wildfire-risk-intelligence';
}
