import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public titulo: string
  constructor() {
    this.titulo = "Formulario"
  }

  ngOnInit(): void {
  }

}
