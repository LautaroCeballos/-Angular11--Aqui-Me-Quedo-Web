import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

import { Consulta } from '../../models/consulta';
import { ConsultaService } from '../../services/consulta.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
  providers: [ConsultaService]
})
export class ConsultarComponent implements OnInit {
  faCalendarAlt = faCalendarAlt;
  faSortDown = faSortDown;

  public consulta: Consulta;
  public today: Date;

  public mensajeError;

  constructor(
    private _consultaService: ConsultaService
  ) { 
    this.consulta = new Consulta(undefined, undefined, '', '');
    this.today = new Date();
    this.mensajeError = "";
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.consulta.cantAdultos === ''){
      this.mensajeError = "¿Cuantos adultos viajan?";
    } else if(this.consulta.cantNinos === ''){
      this.mensajeError = "¿Cuantos niños viajan?";
    } else {
      this._consultaService.enviarConsulta(this.consulta);
      this.mensajeError = "";
    }  
    
  }

}
