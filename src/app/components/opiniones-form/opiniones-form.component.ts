import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Testimonio } from '../../models/testimonio';
import { TestimonioService } from '../../services/testimonio.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-opiniones-form',
  templateUrl: './opiniones-form.component.html',
  styleUrls: ['./opiniones-form.component.css'],
  providers: [TestimonioService]
})
export class OpinionesFormComponent implements OnInit {
  faTimes = faTimes;

  public testimonio: Testimonio; 
  @Input() experiencia: Number;
  @Output() cerrarModal = new EventEmitter;

  // public today = new Date();
  public testimonioFecha: any;


  constructor() {
   }

  ngOnInit(): void {

    this.testimonio = new Testimonio('', new Date(), this.experiencia, '');
  }

  onSubmit(){
    alert("Formulario Enviado");
    this.testimonio.fecha = this.testimonioFecha;
    // console.log(this.testimonio);
  }

  closeOpForm(){
    this.cerrarModal.emit();
  }

}
