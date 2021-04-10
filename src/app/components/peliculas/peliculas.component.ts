import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Pelicula} from '../../models/pelicula'
import { PeliculaService} from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService],
})
export class PeliculasComponent implements OnInit {
  public titulo: string
  public peliculas: Array<Pelicula>
  public peliculaText = 'Bienvenido al master en framework Angular'
  public favorita: Pelicula;
  public fecha: any;
  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = 'Componente Pelicula';
    this.peliculas = this._peliculaService.getPelicula();
    this.fecha= new Date(2021, 8, 12)
  }

  //Logica
  ngOnInit(): void {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }
  //
  ngDoCheck() {}
  //Avisa que se va a eliminar el componente
  ngOnDestroy() {
    console.log('object va a ser eliminado');
  }
  cambiarTitulo() {
    this.titulo = 'Titulo nuevo';
  }
  mostrarFavorita(event){
    this.favorita= event.pelicula;
  }
}
