import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CityService } from '../city.service';
import { City } from '../city';


@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {

  city: City | undefined;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCity();
  }

  getCity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cityService.getCity(id)
      .subscribe(city => this.city = city);
  }

  goBack(): void {
    this.location.back();
  }

}
