import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  query: string = '';
  countries: Country[] = [];
  error: boolean = false;

  constructor(private countryService: CountryService) {}

  search(query: string) {
    this.query = query;
    this.countryService.searchByCapital(this.query).subscribe(
      (countries) => {
        this.countries = countries;
      },
      (error) => {
        this.error = true;
        this.countries = [];
      }
    );
  }
}
