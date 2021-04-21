import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Testimonio } from '../../models/testimonio';
import { TestimonioService } from '../../services/testimonio.service';
import _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core'


@Component({
  selector: 'app-opiniones-form',
  templateUrl: './opiniones-form.component.html',
  styleUrls: ['./opiniones-form.component.css'],
  providers: [TestimonioService]
})
export class OpinionesFormComponent implements OnInit {
  faTimes = faTimes;

  public testimonio: Testimonio;
  public today: Date;

  @Input() experiencia: Number;
  @Output() cerrarModal = new EventEmitter;


  constructor(
    private _testimonioService: TestimonioService
  ) {
    this.today = new Date();
  }

  ngOnInit(): void {
    this.testimonio = new Testimonio('', new Date(), this.experiencia, '');
  }

  onSubmit() {
    const swal: SweetAlert = _swal as any;
    
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
        this._testimonioService.sendTestimonio(this.testimonio);
      } else {
        swal({
          text: "Ha cancelado el envio exitosamente"
        });
      }
    });
  }

  closeOpForm() {
    this.cerrarModal.emit();
  }

}
