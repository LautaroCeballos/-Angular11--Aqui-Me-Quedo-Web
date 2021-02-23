import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { ServHomeComponent } from './components/serv-home/serv-home.component';
import { AdemasComponent } from './components/ademas/ademas.component';
import { OpinionesComponent } from './components/opiniones/opiniones.component';
import { RedesComponent } from './components/redes/redes.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { TipologiasComponent } from './components/tipologias/tipologias.component';
import { GaleriaParqueComponent } from './components/galeria-parque/galeria-parque.component';
import { MapsComponent } from './components/maps/maps.component';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ComplejoComponent } from './components/complejo/complejo.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { RefGeoComponent } from './components/ref-geo/ref-geo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderHomeComponent,
    ConsultarComponent,
    ServHomeComponent,
    AdemasComponent,
    OpinionesComponent,
    RedesComponent,
    SobreNosotrosComponent,
    TipologiasComponent,
    GaleriaParqueComponent,
    MapsComponent,
    FooterComponent,
    HomeComponent,
    ComplejoComponent,
    UbicacionComponent,
    ContactoComponent,
    ErrorComponent,
    RefGeoComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4jhQXWJ1FobS9D4cLUveBrTeJjiMl7Uk'
    }),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
