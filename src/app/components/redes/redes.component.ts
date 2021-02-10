import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  faInstagram = faInstagram;
  faFacebookSquare = faFacebookSquare;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
  }

}
