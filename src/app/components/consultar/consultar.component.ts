import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  faCalendarAlt = faCalendarAlt;
  faSortDown = faSortDown;

  public consulta: any;

  constructor() { 
    this.consulta = {
      llegada: '',
      salida: '',
      cantAdultos: '',
      cantNinos: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario Enviado");
    console.log(this.consulta);
  }

}
