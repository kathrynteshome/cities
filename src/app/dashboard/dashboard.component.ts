import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities.slice(1, 5));
  }

}
