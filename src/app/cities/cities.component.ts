import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CITIES } from '../mock-cities';
import { CityService } from '../city.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities);
  }

}
