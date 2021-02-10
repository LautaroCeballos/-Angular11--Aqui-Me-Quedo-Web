import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faWhatsapp = faWhatsapp;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
