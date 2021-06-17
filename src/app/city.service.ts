import { Injectable } from '@angular/core';
import { City } from './city';
import { CITIES } from './mock-cities';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

    getCities(): Observable<City[]> {
    const cities = of(CITIES);
    return cities;
  }

  getCity(id: number): Observable<City> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const city = CITIES.find(h => h.id === id)!;
    return of(city);
  }
}
