import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public titulo: string
  public formText = 'Bienvenido al master en framework Angular'
  public user: any
  constructor() {
    this.titulo = "Formulario";
    this.user = {
      nombre : '',
      apellido :'',
      biografia: '',
      genero: ''
    }
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user);
  }

}
