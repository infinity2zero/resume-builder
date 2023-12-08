import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'range-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rangeslider.component.html',
  styleUrl: './rangeslider.component.scss'
})
export class RangeSliderComponent {
  @Output() sliderValue : EventEmitter<any> = new EventEmitter();
  getSliderValue(evt:any) {
     this.sliderValue.emit(evt.target.value);
  }
  
}
