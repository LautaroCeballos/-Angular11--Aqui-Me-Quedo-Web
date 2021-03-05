import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Testimonio } from '../../models/testimonio';
import { TestimonioService } from '../../services/testimonio.service';


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
    this.testimonio = new Testimonio('', new Date(), this.experiencia, '');
    this.today = new Date();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert("Formulario Enviado");
    this._testimonioService.sendTestimonio(this.testimonio);
  }

  closeOpForm() {
    this.cerrarModal.emit();
  }

}
