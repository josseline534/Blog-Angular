import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponente } from './components/miComponente/miComponente.component';
import { PruebasComponent } from './components/pruebas/pruebas.component'
@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PruebasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
