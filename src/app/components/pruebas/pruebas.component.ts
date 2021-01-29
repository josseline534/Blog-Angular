import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string
  //Dar valor a las variables
  constructor() {
    this.titulo = "Componente Prueba"
  }
  //Logica
  ngOnInit(): void {
  }
  //
  ngDoCheck(){
  }
  //Avisa que se va a eliminar el componente
  ngOnDestroy(){
    console.log("object va a ser eliminado");
  }
  cambiarTitulo(){
    this.titulo="Titulo nuevo"
  }
}
