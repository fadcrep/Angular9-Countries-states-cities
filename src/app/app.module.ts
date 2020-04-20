import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryStateCitiesComponent } from './country-state-cities/country-state-cities.component';
import { CountriesService } from './_Services/countries.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryStateCitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
