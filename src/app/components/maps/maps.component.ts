import { Component, OnInit } from '@angular/core';
import { Informacion } from '../../models/informacion';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  providers: [InformacionService]
})
export class MapsComponent implements OnInit {

  private info: Informacion;
  public lat: number;
  public lgn: number;
  public zoom: number;

  constructor(
    private _informacionService: InformacionService
  ) { 
    this.info = this._informacionService.getInfo();
  }

  ngOnInit(): void {
    const { lat, lgn, zoom } = this.info.ubicacion;

    this.lat = lat;
    this.lgn = lgn;
    this.zoom = zoom;

  }

}
