import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries_state_cities_json: string = "https://raw.githubusercontent.com/fadcrep/Country-State-City-Database/master/Contries.json";

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get(this.countries_state_cities_json);
  }
}
