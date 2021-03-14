import { Injectable } from '@angular/core';
import { Consulta } from '../models/consulta';
import { DatePipe } from '@angular/common';

import { Informacion } from '../models/informacion';


@Injectable()
export class ConsultaService{
    private info: Informacion;
    private mensaje: string;

    constructor(){
        this.info = new Informacion(
            {
                nombre: 'Bibiana',
                apellido: 'Dalfeo' 
            },{
                telefono: 5493513451890,
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
    };

    private writeMensaje(consulta){
        let mensaje: string;

        const desde = new DatePipe("en-US").transform(consulta.llegada, 'dd-MM-yy');    
        const hasta = new DatePipe("en-US").transform(consulta.salida, 'dd-MM-yy');
        
        mensaje = "Hola Aqui Me Quedo. Estoy consultando disponibilidad desde el dia *" + desde + "* hasta el *" + hasta + "* para *" + consulta.cantAdultos + "* adultos";
        if(consulta.cantNinos > 0){
            mensaje += " y *" + consulta.cantNinos + "* niños";
        }else{
            mensaje += " sin niños.";
        }

        mensaje += ". Muchas gracias y Esperamos su respuesta.";

        return mensaje;
    }
    
    enviarConsulta(consulta: Consulta){
        this.mensaje = this.writeMensaje(consulta);

        window.open('https://wa.me/' + this.info.contacto.telefono + '?text=' + this.mensaje, '_blank');
    }
}