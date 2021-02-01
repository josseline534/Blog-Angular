import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public titulo: string
  constructor() {
    this.titulo = "Página de prueba !!"
  }

  ngOnInit(): void {
  }

}
