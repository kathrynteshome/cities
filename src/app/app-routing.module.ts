import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { CuisineDetailComponent } from './cuisine-detail/cuisine-detail.component';


const routes: Routes = [
  { path: 'cities', component: CitiesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: CityDetailComponent },
  { path: 'food', component: CuisinesComponent},
  { path: 'food/:id', component: CuisineDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
