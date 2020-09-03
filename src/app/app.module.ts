import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { SeleccionComponent } from './seleccion/seleccion.component';

@NgModule({
  declarations: [
    AppComponent,
    SimuladorComponent,
    SeleccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
