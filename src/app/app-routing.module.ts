import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ViewCountryComponent } from './country/pages/view-country/view-country.component';

const routes: Routes = [
  {
    path: '',
    component: ByCountryComponent,
    //Ruta excata
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ByRegionComponent,
  },
  {
    path: 'capital',
    component: ByCapitalComponent,
  },
  {
    path: 'country/:id',
    component: ViewCountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

//forRoot: rutas principales
//forChild: rutas hijas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
