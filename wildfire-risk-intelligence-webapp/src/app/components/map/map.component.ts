import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';
import { constants } from '../../environments/constants';
import { environment } from '../../environments/environment';

const { mapStyle, mapOptions: initialState } = constants.mapLibre;
const { geoApiKey } = environment;

@Component({
  selector: 'map-component',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    const map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${mapStyle}?apiKey=${geoApiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    map.addControl(new NavigationControl());
  }
}
