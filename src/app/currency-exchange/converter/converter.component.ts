import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  value = 'Clear me';
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Egypt' },
    { value: 'pizza-1', viewValue: 'United States' },
    { value: 'tacos-2', viewValue: 'Australia' },
  ];
}
