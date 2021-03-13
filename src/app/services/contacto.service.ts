import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Contacto } from '../models/contacto';

import { Informacion } from '../models/informacion';

@Injectable()


export class ContactoService{
    private info: Informacion;
    private mensaje: string;

    constructor(){
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
        )
    }

    private writeMensaje(contacto){
        let mensaje: string;

        const desde = new DatePipe("en-US").transform(contacto.desde, 'dd-MM-yy');    
        const hasta = new DatePipe("en-US").transform(contacto.hasta, 'dd-MM-yy');
        
        mensaje = "Hola Aqui Me Quedo. Soy " + contacto.nombre + ", y estoy consultando disponibilidad desde el dia " + desde + " hasta el " + hasta + " para " + contacto.cantMayores + " adultos";
        if(contacto.cantMenores > 0){
            mensaje += " y " + contacto.cantMenores + " niños"
        }else{
            mensaje += " sin niños."
        }

        if(contacto.detalles != ''){
            mensaje += ". Tambien me gustaria comentar que " + contacto.detalles;
        }

        mensaje += ". Muchas gracias y Esperamos su respuesta."

        return mensaje;
    }

    
    enviarContacto(contacto: Contacto){        
        this.mensaje = this.writeMensaje(contacto);

        window.location.href = 'https://wa.me/' + this.info.contacto.telefono + '?text=' + this.mensaje;
        console.log(this.mensaje);
    }
}