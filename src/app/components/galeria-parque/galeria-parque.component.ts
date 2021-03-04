import { Component, OnInit } from '@angular/core';
import { Imagen } from '../../models/imagen';
import { ImagenService } from '../../services/imagen.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-galeria-parque',
  templateUrl: './galeria-parque.component.html',
  styleUrls: ['./galeria-parque.component.css'],
  providers: [ImagenService]
})
export class GaleriaParqueComponent implements OnInit {
  faTimes = faTimes;

  public images: Array<Imagen>;
  public img: Imagen;
  public index: Number;

  public viewSliderModal: Boolean;

  constructor(
    private _imagenService: ImagenService
  ) { }

  ngOnInit(): void {
    this.viewSliderModal = false;
    this.images = this._imagenService.getImagesExt();
  }

  showSliderModal(image, i){
    this.img = image;
    this.index = i;
    this.viewSliderModal = true;
  }

  closeSliderModal(){
    this.viewSliderModal = false;
  }

}
