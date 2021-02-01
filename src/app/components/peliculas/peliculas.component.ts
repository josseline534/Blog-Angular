import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo = 'Componente Pelicula';
  }

  //Logica
  ngOnInit(): void {}
  //
  ngDoCheck() {}
  //Avisa que se va a eliminar el componente
  ngOnDestroy() {
    console.log('object va a ser eliminado');
  }
  cambiarTitulo() {
    this.titulo = 'Titulo nuevo';
  }
}
