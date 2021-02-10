//Importar el router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { HomeComponent } from './components/home/home.component';
import { ComplejoComponent } from './components/complejo/complejo.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { TraslasierrasComponent } from './components/traslasierras/traslasierras.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'complejo', component: ComplejoComponent},
    {path: 'ubicacion', component: UbicacionComponent},
    {path: 'traslasierras', component: TraslasierrasComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', component: ErrorComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);