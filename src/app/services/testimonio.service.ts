import { Injectable } from '@angular/core';
import { Testimonio } from '../models/testimonio';

@Injectable()
export class TestimonioService{
    public testimonios: Testimonio[];
    public shortTestimonios: Testimonio[];

    constructor(){
        this.testimonios = [ //Tolera hasta 5 comentarios
            new Testimonio('Lautaro Ceballos', new Date(2020, 1, 1), 4," Hermoso complejo y excelente la atencion. La pasamos muy bien."),
            new Testimonio('Euge Caceres', new Date(2020, 1, 1), 5, "Un hermoso lugar, muy acojedor y lleno de bellos recuerdos."),
            new Testimonio('Euge Caceres', new Date(2020, 1, 1), 5, "Un hermoso lugar, muy acojedor y lleno de bellos recuerdos."),
            new Testimonio('Euge Caceres', new Date(2020, 1, 1), 5, "Un hermoso lugar, muy acojedor y lleno de bellos recuerdos."),
            new Testimonio('Euge Caceres', new Date(2020, 1, 1), 5, "Un hermoso lugar, muy acojedor y lleno de bellos recuerdos.")
        ];
    }

    getAllTestimonios(){
        return this.testimonios;
    }
}