import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  faCalendarAlt = faCalendarAlt;
  faSortDown = faSortDown;
  constructor() { }

  ngOnInit(): void {
  }

}
