import { Component } from '@angular/core';
import { InputComponent } from './ui-components/input/input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'currency-conversion-app';
  isDataAvailable: boolean = false;
  failedToLoad: boolean = false;
  // Define the amountValue property
  amountValue: number = 0;
}
