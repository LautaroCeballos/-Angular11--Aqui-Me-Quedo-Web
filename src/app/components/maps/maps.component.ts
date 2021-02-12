import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat= -31.722255506436593; 
  lng= -65.008289713163;
  zoom = 15;

  constructor() { }

  ngOnInit(): void {
  }

}
