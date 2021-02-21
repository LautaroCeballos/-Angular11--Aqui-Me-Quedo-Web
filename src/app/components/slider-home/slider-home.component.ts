import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from "../../animations/animations";

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '1300ms' } })]),
      transition('* => void', [useAnimation(fadeOut, { params: { time: '1300ms' } })])
    ])
  ]
})


export class SliderHomeComponent implements OnInit {

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  public slides = [
    { src: "../../../assets/images/slider-home/img1.jpg", alt: "", id: 0 },
    { src: "../../../assets/images/slider-home/img2.jpg", alt: "", id: 1 },
    { src: "../../../assets/images/slider-home/img3.jpg", alt: "", id: 2 },
    { src: "../../../assets/images/slider-home/img4.jpg", alt: "", id: 3 },
    { src: "../../../assets/images/slider-home/img5.jpg", alt: "", id: 4 }
  ];

  public slidesThumbs = this.slides.slice();

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
    this.preloadImages();
    this.updateSlideThumb("default");
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  trackByItems(index: number, item: any){
    return index;
  }

  onPreviousClick() {
    this.updateSlideThumb("previous");
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    this.updateSlideThumb("next");
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }


  slideTo(thumbId, index) {
    this.updateSlideThumb("to", index);
    this.currentSlide = thumbId;
  }

  updateSlideThumb(action: string, index?:Number) { //Sobrecarga de metodos
    switch (action) {
      case "previous":
        this.slidesThumbs.pop();
        this.slidesThumbs.unshift(this.slides[this.currentSlide]);
        break;

      case "next":
        this.slidesThumbs.shift();
        this.slidesThumbs.push(this.slides[this.currentSlide]);
        break;

      case "to":
        for(let i = 0; i <= index; i++){
          this.slidesThumbs.shift();
          this.slidesThumbs.push(this.slides[this.currentSlide]);
          const next = this.currentSlide + 1;
          this.currentSlide = next === this.slides.length ? 0 : next;
        }
        break;

      default:
        this.slidesThumbs = this.slides.slice();
        this.slidesThumbs.splice(this.currentSlide, 1);
        break;
    }
  }

  slideToMobile(index){
    this.currentSlide = index;
  }
}
