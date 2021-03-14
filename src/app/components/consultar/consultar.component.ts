import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

import { Consulta } from '../../models/consulta';
import { ConsultaService } from '../../services/consulta.service';

import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from "../../animations/animations";

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
  providers: [ConsultaService],
  animations: [
    trigger('errorAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '200ms' } })]),
      transition('* => void', [useAnimation(fadeOut, { params: { time: '200ms' } })])
    ])
  ]
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
      swal({
        title: "Se enviara via WhatsApp",
        text: "¿Desea continuar?",
        icon: "warning",
        buttons: ['Cancelar', 'Continuar'],
        dangerMode: false,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal({
            text: "Sera redireccionado a WhatsApp",
            icon: "success",
          });
          this._consultaService.enviarConsulta(this.consulta);
        } else {
          swal({
            text: "Ha cancelado el envio exitosamente"
          });
        }
      });
      this.mensajeError = "";
    }  
    
  }

}
