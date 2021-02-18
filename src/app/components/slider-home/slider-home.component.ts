import { Component, OnInit} from '@angular/core';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from "../../animations/animations";



@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, {params: {time: '1300ms'}})]),
      transition('* => void', [useAnimation(fadeOut, {params: {time: '1300ms'}})])
    ])
  ]
})


export class SliderHomeComponent implements OnInit {

  public slides = [
    { src: "../../../assets/images/slider-home/img1.jpg" },
    { src: "../../../assets/images/slider-home/img2.jpg" },
    { src: "../../../assets/images/slider-home/img3.jpg" },
    { src: "../../../assets/images/slider-home/img4.jpg" },
    { src: "../../../assets/images/slider-home/img5.jpg" }
  ];

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
    this.preloadImages();
  }

  preloadImages() {
    for(const slide of this.slides){
      new Image().src = slide.src;
    }
  }

  onPreviousClick(){
    const previous = this.currentSlide -1;
    this.currentSlide = previous < 0 ? this.slides.length -1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick(){
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
  


}
