import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class ByRegionComponent {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  activeRegion: string = '';

  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  getCSSClass(region: string) {
    return this.activeRegion === region
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  searchRegion(region: string) {
    if (this.activeRegion === region) return;

    this.countries = [];

    this.countryService.searchByRegion(region).subscribe((countries) => {
      this.countries = countries;
    });

    this.activeRegion = region;
  }
}
