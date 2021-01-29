//Crear componentes
import {Component} from '@angular/core'

//decorador indicar caracteristicas
@Component({
    selector: 'miComponente',
    templateUrl: './miComponente.component.html'
})

export class MiComponente{
    public titulo: string
    public comentario: string
    public year: number
    public mostrarPruebas: boolean
    constructor(){
        this.titulo="Hola Josseline"
        this.comentario="Es un comentario"
        this.year = 2021
        this.mostrarPruebas = true
        console.log("mi coomponente");
        console.log(`${this.titulo}-${this.comentario}-${this.year}` );
    }
    ocultarPruebas(){
        this.mostrarPruebas=false
    }
}