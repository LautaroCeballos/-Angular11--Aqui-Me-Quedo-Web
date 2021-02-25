import { Component, OnInit } from '@angular/core';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faAngry, faFrown, faMehBlank, faSmileBeam, faGrinHearts, IconDefinition} from '@fortawesome/free-solid-svg-icons';

import { Testimonio } from '../../models/testimonio';
import { TestimonioService } from '../../services/testimonio.service';



@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css'],
  providers: [TestimonioService]
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

  constructor(
    private _testimonioService: TestimonioService
  ) {}   

  ngOnInit(): void {
    this.clasIcon = [this.faAngry, this.faFrown, this.faMehBlank, this.faSmileBeam, this.faGrinHearts];
    this.testimonios = this._testimonioService.getAllTestimonios();
    this.desktopView = screen.width > 450 ? true : false;
    this.shortView = this.desktopView ? true : false;
  }

  newTestimonio(event){
    alert("Se agrega un nuevo testimonio");
    console.log(event.srcElement.ownerDocument.activeElement.id);
  }

  toggleMasComentarios(){
    this.shortView = !this.shortView;
  }


}
