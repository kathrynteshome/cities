import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FormsModule } from '@angular/forms';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { CuisineDetailComponent } from './cuisine-detail/cuisine-detail.component';
import { ExperiencesComponent } from './experiences/experiences.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent,
    DashboardComponent,
    CuisinesComponent,
    CuisineDetailComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
