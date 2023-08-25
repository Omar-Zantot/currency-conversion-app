import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  @ViewChild('dropdown', { static: false }) dropdown?: ElementRef;
  @ViewChild('select', { static: false }) select?: ElementRef;
  selected?: string;
  selectedValue?: string;
  options = ['Egypt', 'USD', 'Itly', 'Saudi Arabia']

  getSelectValue() {

    this.selected = this.select?.nativeElement.value;
    this.selectedValue = this.dropdown?.nativeElement.value;



  }
}
