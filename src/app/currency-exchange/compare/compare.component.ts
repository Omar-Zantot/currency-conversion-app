import { Component } from '@angular/core';
interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {
  value = 'Clear me';
  countries: Country[] = [
    { value: 'EGY-0', viewValue: 'Egypt' },
    { value: 'USA-1', viewValue: 'United States' },
    { value: 'AUS-2', viewValue: 'Australia' },
  ];
}
