import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  query: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestionsCountries: Country[] = [];
  viewSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.error = false;
    this.viewSuggestions = false;
    this.query = query;
    //Para que un observable se dispare necesita
    //como minimo un subscribe
    this.countryService.searchCountry(this.query).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (err) => {
        this.error = true;
        this.countries = [];
      }
    );
  }

  suggestions(query: string) {
    this.error = false;
    this.query = query;
    this.viewSuggestions = true;

    this.countryService.searchCountry(query.trim()).subscribe(
      (countries) => (this.suggestionsCountries = countries.splice(0, 3)),
      (err) => (this.suggestionsCountries = [])
    );

    //TODO: crear suggestions
  }

  searchSuggestion(query: string) {
    this.search(query);
  }
}
