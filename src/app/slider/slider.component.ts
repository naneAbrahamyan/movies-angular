import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Item } from 'src/assets/Item';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit  {
    @Input() data: any[] = [];
    currentIndex = 0;



    constructor(){

    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


 
  onNext() {
    // this.currentIndex = (this.currentIndex + 1) % this.data.length;
    this.data.push(this.data.shift())

  }

  onPrev() {
    // this.currentIndex = (this.currentIndex - 1 + this.data.length) % this.data.length;
    this.data.unshift(this.data.pop())

  }

}
