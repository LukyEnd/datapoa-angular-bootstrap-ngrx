import * as MapboxGL from 'mapbox-gl';
import { environment } from '../../../../environments/environment';

export class MapConfig {
  public mapData(lngLat: Array<any>): void {
    (MapboxGL as any).accessToken = environment.mapTokenKey;
    const maps = new MapboxGL.Map({
      container: 'maps',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: lngLat[0],
      zoom: 16,
      pitch: 50,
      maxPitch: 68,
    });

    maps.on('load', () => {
      maps.addSource('route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: lngLat,
          },
        },
      });
      maps.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#0000FF',
          'line-width': 6,
          'line-opacity': 0.5,
        },
      });
      for (let key in lngLat) {
        new MapboxGL.Marker()
          .setLngLat(lngLat[key])
          .setPopup(
            new MapboxGL.Popup({ offset: 25 }).setHTML(
              `<a  href= "https://www.google.com/maps/?q=${lngLat[
                key
              ].reverse()}"
              target="_blank" class="googleMaps"><h6>Ver no Google Maps</h6></a>`
            )
          )
          .addTo(maps);
      }
    });
  }
}
