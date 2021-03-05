import { Component, OnInit, Input } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from "../../animations/animations";

import { Imagen } from "../../models/imagen";
import { ImagenService } from "../../services/imagen.service";

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css'],
  providers: [ImagenService],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '600ms' } })]),
      transition('* => void', [useAnimation(fadeOut, { params: { time: '600ms' } })])
    ])
  ]
})


export class SliderHomeComponent implements OnInit {

  @Input() isModal: boolean;
  @Input() selectedImgModal: Imagen;
  @Input() indexModal: number;

  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  public slides: Array<Imagen>;
  public slidesThumbs: Array<Imagen>;

  currentSlide = 0;

  constructor(
    private _imagenService: ImagenService
  ) {
        
   }

  ngOnInit(): void {
    if(this.isModal){
      this.slides = this._imagenService.getImagesExt();
    }else{
      this.slides = this._imagenService.getImagesHome();
    }

    this.slidesThumbs = this.slides.slice();

    this.preloadImages();
    this.updateSlideThumb("default");

    if(this.isModal) this.slideTo(this.selectedImgModal.id, this.indexModal - 1);
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
