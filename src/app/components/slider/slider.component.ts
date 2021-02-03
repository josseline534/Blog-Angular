import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mySlider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() nombre: string
  @Input() size: string

  constructor() { }

  ngOnInit(): void {
  }

}
