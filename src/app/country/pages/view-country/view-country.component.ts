import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [],
})
export class ViewCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((param) => {
    //   this.countryService.getCountryByCode(param.id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });

    //Una mejor forma de ordenar los observables
    //switch map permite encadenar subscribes
    //tap ejecuta un efecto secundario
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.countryService.getCountryByCode(params.id)),
        tap(console.log)
      )
      .subscribe((country) => (this.country = country));
  }
}
