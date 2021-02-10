import { Component, OnInit } from '@angular/core';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, faAngry, faFrown, faMehBlank, faSmileBeam, faGrinHearts} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.component.html',
  styleUrls: ['./opiniones.component.css']
})
export class OpinionesComponent implements OnInit {
  farStar = farStar;
  fasStar = fasStar;
  faAngry = faAngry;
  faFrown = faFrown;
  faMehBlank = faMehBlank;
  faSmileBeam = faSmileBeam;
  faGrinHearts = faGrinHearts;


  constructor() { }

  ngOnInit(): void {
  }

}
