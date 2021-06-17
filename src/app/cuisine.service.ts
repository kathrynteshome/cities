import { Injectable } from '@angular/core';
import { CUISINES } from './mock-cuisines';
import { Cuisine } from './cuisine';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {

  constructor() { }

  getCuisines(): Observable<Cuisine[]> {
    const cuisines = of(CUISINES);
    return cuisines;
  }

  getCuisine(id: number): Observable<Cuisine> {
    const cuisine = CUISINES.find(c => c.id === id)!;
    return of(cuisine);
  
  }
}
