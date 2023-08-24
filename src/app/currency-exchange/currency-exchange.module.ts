import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyExchangeRoutingModule } from './currency-exchange-routing.module';
import { CurrencyExchangeComponent } from './currency-exchange.component';
import { ConverterComponent } from './converter/converter.component';
import { CompareComponent } from './compare/compare.component';


@NgModule({
  declarations: [
    CurrencyExchangeComponent,
    ConverterComponent,
    CompareComponent
  ],
  imports: [
    CommonModule,
    CurrencyExchangeRoutingModule
  ]
})
export class CurrencyExchangeModule { }
