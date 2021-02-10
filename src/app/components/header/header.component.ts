import { Component, OnInit } from '@angular/core';
import { faHome, faBook, faMapSigns, faMountain, faAddressBook } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faHome = faHome;
  faBook = faBook;
  faMapSigns = faMapSigns;
  faMountain = faMountain;
  faAddressBook = faAddressBook;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarClase(){
    let siteNav = document.getElementById('menu');
    siteNav.classList.toggle('menu-open');

    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('hamburguesa-animation');
  }


}
