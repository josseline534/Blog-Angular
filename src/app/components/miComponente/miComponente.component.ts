//Crear componentes
import {Component} from '@angular/core'

//decorador indicar caracteristicas
@Component({
    selector: 'miComponente',
    template: `
                <h1>{{titulo}}</h1>
                <p>{{comentario}}</p>
                <time>{{year}}</time>
                `
})

export class MiComponente{
    public titulo: string
    public comentario: string
    public year: number
    constructor(){
        this.titulo="Hola Josseline"
        this.comentario="Es un comentario"
        this.year = 2021
        console.log("mi coomponente");
        console.log(`${this.titulo}-${this.comentario}-${this.year}` );
    }
}