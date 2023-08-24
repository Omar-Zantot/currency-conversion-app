import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyExchangeRoutingModule } from './currency-exchange-routing.module';
import { CurrencyExchangeComponent } from './currency-exchange.component';
import { ConverterComponent } from './converter/converter.component';
import { CompareComponent } from './compare/compare.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { CascadeSelectModule } from 'primeng/cascadeselect';



@NgModule({
  declarations: [
    CurrencyExchangeComponent,
    ConverterComponent,
    CompareComponent,

  ],
  imports: [
    CommonModule,
    CurrencyExchangeRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class CurrencyExchangeModule { }
