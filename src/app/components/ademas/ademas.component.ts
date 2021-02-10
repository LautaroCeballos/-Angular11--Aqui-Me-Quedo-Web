import { Component, OnInit } from '@angular/core';
import { faCalendarCheck, faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faPaw, faSwimmer, faCocktail } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ademas',
  templateUrl: './ademas.component.html',
  styleUrls: ['./ademas.component.css']
})
export class AdemasComponent implements OnInit {
  faCalendarCheck = faCalendarCheck;
  faCreditCard = faCreditCard;
  faPaw = faPaw;
  faSwimmer = faSwimmer;
  faCocktail = faCocktail;
  
  constructor() { }

  ngOnInit(): void {
  }

}
