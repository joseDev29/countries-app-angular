import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    ViewCountryComponent,
    CountriesTableComponent,
    CountryInputComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ViewCountryComponent,
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
  ],
})
export class CountryModule {}
