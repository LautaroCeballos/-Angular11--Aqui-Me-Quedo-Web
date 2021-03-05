import { Injectable } from '@angular/core';
import { Consulta } from '../models/consulta';

@Injectable()
export class ConsultaService{
    
    enviarConsulta(Consulta: Consulta){
        console.log(Consulta);
    }
}