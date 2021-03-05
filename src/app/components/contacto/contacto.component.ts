import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ContactoService]
})
export class ContactoComponent implements OnInit {

  public contacto: Contacto;
  public today: Date;

  constructor(
    private _contactoService: ContactoService
  ) {
    this.contacto = new Contacto('', '', new Date(), new Date(), 2, 0, '');
    this.today = new Date();
  }

  ngOnInit(): void {}

  

  onSubmit(){
    alert("Formulario Enviado");
    this._contactoService.enviarContacto(this.contacto);
  }

}
