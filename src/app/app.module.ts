import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { MiComponente } from './components/miComponente/miComponente.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { EsParPipe } from './pipes/esperar.pipe';
import { HomeComponent } from './components/home/home.component';
import { ArticleDetalleComponent } from './components/article-detalle/article-detalle.component';
import { SearchComponent } from './components/search/search.component'
@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    ArticleComponent,
    FooterComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    PeliculasComponent,
    ErrorComponent,
    PeliculaComponent,
    EsParPipe,
    HomeComponent,
    ArticleDetalleComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    routing, //modulo
    FormsModule,
    HttpClientModule,
    MomentModule,
  ],
  providers: [appRoutingProviders], //servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
