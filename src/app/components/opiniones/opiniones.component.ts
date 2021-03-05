import { Component, OnInit } from '@angular/core';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faAngry, faFrown, faMehBlank, faSmileBeam, faGrinHearts, IconDefinition} from '@fortawesome/free-solid-svg-icons';

import { Testimonio } from '../../models/testimonio';
import { TestimonioService } from '../../services/testimonio.service';

import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut } from "../../animations/animations";

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css'],
  providers: [TestimonioService],
  animations: [
    trigger('modalAnimation', [
      transition('void => *', [useAnimation(fadeIn, { params: { time: '200ms' } })]),
      transition('* => void', [useAnimation(fadeOut, { params: { time: '200ms' } })])
    ])
  ]
})
export class OpinionesComponent implements OnInit {
  farStar = farStar;
  fasStar = fasStar;
  faAngry = faAngry;
  faFrown = faFrown;
  faMehBlank = faMehBlank;
  faSmileBeam = faSmileBeam;
  faGrinHearts = faGrinHearts;

  public testimonios: Array<Testimonio>;
  public clasIcon: Array<IconDefinition>;
  public shortView: Boolean;
  public desktopView: Boolean;
  public viewFormModal: Boolean;
  public expValue: Number;

  constructor(
    private _testimonioService: TestimonioService
  ) {}   

  ngOnInit(): void {
    this.clasIcon = [this.faAngry, this.faFrown, this.faMehBlank, this.faSmileBeam, this.faGrinHearts];
    this.testimonios = this._testimonioService.getAllTestimonios();
    this.desktopView = screen.width > 450 ? true : false;
    this.shortView = this.desktopView ? true : false;
    this.viewFormModal = false;
  }

  newTestimonio(event){
    let clasificacion = event.srcElement.ownerDocument.activeElement.id;
    this.expValue = parseInt(clasificacion.substring(0, 1));
    this.viewFormModal = true;
  }

  cerrarModal(){
    this.viewFormModal = false;
  }

  toggleMasComentarios(){
    this.shortView = !this.shortView;
  }


}
