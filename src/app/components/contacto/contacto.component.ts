import { Component, OnInit } from '@angular/core';
import { Contacto } from '../../models/contacto';
import { ContactoService } from '../../services/contacto.service';
import _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core'

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
    const swal: SweetAlert = _swal as any;

    if(
      this.contacto.nombre === '' ||
      this.contacto.telefono === '' ||
      this.contacto.hasta === this.today      
    ){
      this.errorInput = true;
    }else{
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
          this._contactoService.enviarContacto(this.contacto);
        } else {
          swal({
            text: "Ha cancelado el envio exitosamente"
          });
        }
      });
      this.errorInput = false;
    }

    
  }

}
