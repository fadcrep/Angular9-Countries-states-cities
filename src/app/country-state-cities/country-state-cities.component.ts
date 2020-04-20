import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../_Services/countries.service';


@Component({
  selector: 'app-country-state-cities',
  templateUrl: './country-state-cities.component.html',
  styleUrls: ['./country-state-cities.component.css']
})
export class CountryStateCitiesComponent implements OnInit {

  countriesList: any[] = [];
  statesList: any[] = [];
  citiesList: any[] = [];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.countriesService.getCountries().subscribe(
      response => {
        this.countriesList = response.Countries;
      }
    )
  }


  onChangeCountry(countryValue) {
    this.statesList = this.countriesList[countryValue].States;
    this.citiesList = this.statesList[0].Cities;
  }

  onChangeState(stateValue) {
    this.citiesList = this.statesList[stateValue].Cities;
  }

}
