import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ref-geo',
  templateUrl: './ref-geo.component.html',
  styleUrls: ['./ref-geo.component.css']
})
export class RefGeoComponent implements OnInit {

  faAngleRight = faAngleRight;

  constructor() { }

  ngOnInit(): void {
  }

}
