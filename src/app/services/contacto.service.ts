import { Injectable } from '@angular/core';
import { Contacto } from '../models/contacto';

@Injectable()
export class ContactoService{
    
    enviarContacto(contacto: Contacto){
        console.log(contacto);
    }
}