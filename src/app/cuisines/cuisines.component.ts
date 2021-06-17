import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../cuisine';
import { CuisineService } from '../cuisine.service';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.scss']
})
export class CuisinesComponent implements OnInit {

  cuisines: Cuisine[] = [];
  
  constructor(private cuisineService: CuisineService) { }

  ngOnInit(): void {
    this.getCuisines();
  }

  getCuisines(): void {
    this.cuisineService.getCuisines()
      .subscribe(cuisines => this.cuisines = cuisines)
  }

}
