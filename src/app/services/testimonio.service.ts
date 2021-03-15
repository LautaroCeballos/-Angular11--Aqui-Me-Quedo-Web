import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Testimonio } from '../models/testimonio';
import { Informacion } from '../models/informacion';

@Injectable()
export class TestimonioService{
    private testimonios: Testimonio[];
    private info: Informacion;
    
    private mensaje: string;

    constructor(){
        this.testimonios = [ //Tolera hasta 5 comentarios
            new Testimonio('Cristian Cardozo', new Date(2021, 3, 9), 5, "Muy lindo lugar, re serca de todo, muy buena atención de su dueña. La verdad voy a volver el año q viene"),
            new Testimonio('Mariela Valencia', new Date(2021, 3, 8), 5, "Excelente!! Comodidad y comfort. La atención es muy buena. Estás cerca de todo!! Estamos muy felices!!"),
            new Testimonio('Alfredo Cuello', new Date(2021, 3, 2), 5, "Excelente ubicacion muy buena pileta y hermosa atencion...nos hizo sentir como en casa.. sin duda volveremos!!!!!!!😎"),
            new Testimonio('Demian Pianta', new Date(2021, 2, 12), 5, "Exelente lugar! Muy tranquilo. Ubicación espectacular. Muy buena onda y atención de Bibiana! Para volver una y otra vez!"),
            new Testimonio('Alan Olivastri', new Date(2020, 1, 15), 5, "Descanso asegurado calidez de su anfitriona y ubicación inmejorable")
        ];

        this.info = new Informacion(
            {
                nombre: 'Bibiana',
                apellido: 'Dalfeo' 
            },{
                telefono: 5493544565770,
                email: 'cabaquimequedo@live.com'
            },{
                numero: '', 
                calle: 'La Piedad y Uspallata', 
                localidad: 'Mina Clavero', 
                ciudad: 'Cordoba'
            },{
                urlInstagram: 'https://www.instagram.com/aquimequedominaclavero/', 
                urlFacebook: 'https://www.facebook.com/complejoaquimequedo/'
            },{
                lat: -31.722255506436593, 
                lgn: -65.008289713163,
                zoom: 15
            }
        );
    }

    getAllTestimonios(){
        return this.testimonios;
    }

    private writeMensaje(testimonio){
        let mensaje: string;

        const fecha = new DatePipe("en-US").transform(testimonio.fecha, 'dd-MM-yy');  
        
        mensaje = "Hola Aqui Me Quedo. Soy " + testimonio.nombre + ", y estuvimos vacacionando el dia " + fecha + " en tus cabañas.";
        mensaje += " Te recomendamos con " + testimonio.clasificacion + " estrellas."
        mensaje += ". Queremos contarte ademas que: " + testimonio.detalle;
        mensaje += ". Muchas gracias!"

        return mensaje;
    }

    sendTestimonio(testimonio: Testimonio){
        this.mensaje = this.writeMensaje(testimonio);
        window.open('https://wa.me/' + this.info.contacto.telefono + '?text=' + this.mensaje, '_blank');
    }
}