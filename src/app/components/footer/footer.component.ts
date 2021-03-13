import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Informacion } from '../../models/informacion';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ InformacionService ]
})
export class FooterComponent implements OnInit {
  private info: Informacion;

  public contacto: any;
  public direccion: any;
  public redes: any;

  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faWhatsapp = faWhatsapp;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor(
    private _informacionService: InformacionService
  ) { 
    this.info = this._informacionService.getInfo();
  }

  ngOnInit(): void {
    this.contacto = this.info.contacto;
    this.direccion = this.info.direccion;
    this.redes = this.info.redes;
  }

}
