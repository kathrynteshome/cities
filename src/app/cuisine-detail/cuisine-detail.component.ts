import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { CuisineService } from '../cuisine.service';
import { Cuisine } from '../cuisine';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-cuisine-detail',
  templateUrl: './cuisine-detail.component.html',
  styleUrls: ['./cuisine-detail.component.scss']
})
export class CuisineDetailComponent implements OnInit {

  cuisine: Cuisine | undefined;
  constructor(
    private route: ActivatedRoute,
    private cityService: CuisineService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCuisine();
  }

  getCuisine(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cityService.getCuisine(id)
    .subscribe(cuisine => this.cuisine = cuisine);
  }
  goBack(): void {
    this.location.back();
  }
}
