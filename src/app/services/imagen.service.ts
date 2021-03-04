import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagen';

@Injectable()
export class ImagenService{
    private imagesHome: Imagen[];
    private imagesExterior: Imagen[];

    constructor(){
        this.imagesHome = [
            new Imagen("assets/images/slider-home/img1.jpg", "Frachada del Frente ", 0),
            new Imagen("assets/images/slider-home/img2.jpg", "Habitacion", 1),
            new Imagen("assets/images/slider-home/img3.jpg", "Comedor", 2),
            new Imagen("assets/images/slider-home/img4.jpg", "Comedor", 3),
            new Imagen("assets/images/slider-home/img5.jpg", "Cocina", 4)
        ];

        this.imagesExterior = [
            new Imagen("assets/images/slider-home/img1.jpg", "Fachada del Frente", 0),
            new Imagen("assets/images/slider-home/img2.jpg", "Habitacion", 1),
            new Imagen("assets/images/slider-home/img3.jpg", "Comedor", 2),
            new Imagen("assets/images/slider-home/img4.jpg", "Comedor", 3)
        ];
    }

    getImagesHome(){
        return this.imagesHome;
    }

    getImagesExt(){
        return this.imagesExterior;
    }
}
