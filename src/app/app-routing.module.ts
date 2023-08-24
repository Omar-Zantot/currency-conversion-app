import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'currency-exchange',
    loadChildren: () => import('./currency-exchange/currency-exchange.module').then(m => m.CurrencyExchangeModule)
  },
  { path: '', redirectTo: 'currency-exchange', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
