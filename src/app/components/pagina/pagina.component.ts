import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
//Recoger valores
import { Router, ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public titulo: string
  public nombre: string
  public apellidos: string
  constructor(
    private _route: ActivatedRoute, //sacar parametros de la url
    private _router: Router //redirecciones a otras páginas
    ) {
    this.titulo = "Página de prueba !!"
  }

  ngOnInit(): void {
    //Recoger parametros de la url
    this._route.params.subscribe((params: Params) =>{
      this.nombre = params.nombre
      this.apellidos = params.apellidos
    })
  }
  //Redireccionamiento
  redireccion(){
    this._router.navigate(['/pagina-de-pruebas', 'Josseline', 'Sanchez'])
  }

}
