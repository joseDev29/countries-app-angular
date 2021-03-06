import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private api_url: string = `https://restcountries.eu/rest/v2`;

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.api_url}/name/${query}`;

    //catchError es un operador de rx js
    //este recibe un error y debe retornar
    //un observable
    //la funcion of de rxjs retorna un observable del valor que se le pase

    // return this.http.get(url).pipe(catchError((err) => of([])));

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.api_url}/capital/${query}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByCode(code: string) {
    const url = `${this.api_url}/alpha/${code}`;

    return this.http.get<Country>(url);
  }

  searchByRegion(region: string) {
    const url = `${this.api_url}/region/${region}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
