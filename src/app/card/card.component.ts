import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']

})


export class CardComponent {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Egypt' },
    { value: 'pizza-1', viewValue: 'United States' },
    { value: 'tacos-2', viewValue: 'Australia' },
  ];

}

