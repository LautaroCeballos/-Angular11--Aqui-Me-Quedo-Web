import { Injectable } from '@angular/core';
import { Informacion } from '../models/informacion';

@Injectable()
export class InformacionService{
    private info: Informacion;

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

    getInfo(){
        return this.info;
    }
}
