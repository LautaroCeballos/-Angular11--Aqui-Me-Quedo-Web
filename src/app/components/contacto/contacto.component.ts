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
  public errorInput: boolean;

  constructor(
    private _contactoService: ContactoService
  ) {
    this.contacto = new Contacto('', '', new Date(), new Date(), 2, 0, '');
    this.today = new Date();
    this.errorInput = false;
  }

  ngOnInit(): void {}  

  onSubmit(){
    if(
      this.contacto.nombre === '' ||
      this.contacto.telefono === '' ||
      this.contacto.hasta === this.today      
    ){
      this.errorInput = true;
    }else{
      this.errorInput = false;
      this._contactoService.enviarContacto(this.contacto);
    }

    
  }

}
