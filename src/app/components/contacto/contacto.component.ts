import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public contacto: any;

  constructor() { 
    this.contacto = {
      nombre: '',
      telefono: '',
      desde: '',
      hasta: '',
      cantMayores: '',
      cantMenores: '',
      detalles: ''

    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("Formulario Enviado");
    console.log(this.contacto);
  }

}
