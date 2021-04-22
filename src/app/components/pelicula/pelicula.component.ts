import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("DOCKER LANZADO");
  }
  seleccionar(event, pelicula){
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }
}
