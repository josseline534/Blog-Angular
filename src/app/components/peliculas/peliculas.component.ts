import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Pelicula} from '../../models/pelicula'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  public titulo: string
  public peliculas: Array<Pelicula>
  public peliculaText = 'Bienvenido al master en framework Angular'
  public favorita: Pelicula;
  public fecha: any;
  constructor() {
    this.titulo = 'Componente Pelicula';
    this.peliculas =[
      new Pelicula ("Juegos del hambre", "https://libros-prohibidos.com/wp-content/uploads/2015/01/los-juegos-del-hambre.jpg", 2011),
      new Pelicula ("Batman", "https://www.elcomercio.com/files/article_main/uploads/2019/03/29/5c9e3ddfc85ca.jpeg", 2016),
      new Pelicula ("Superman", "https://es.web.img3.acsta.net/pictures/14/03/06/13/55/345785.jpg", 2019),
      new Pelicula ("Spiderman", "https://media.revistagq.com/photos/5d5d19b10ef2260008f5cdb7/master/pass/mejor%20spider-man%20pelicula%20sony%20marvel.jpg", 2020),
      new Pelicula ("Los vengadores EndGame", "https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F052%2F759%2Fvengadores-endgame-1.jpg&nuevoancho=690&medio=abc", 2016),
      new Pelicula ("Iron man 1", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ironman-bluray-1554389527.jpg?crop=1xw:1xh;center,top&resize=320:*", 2010),
      new Pelicula ("Batman vs Superman", "https://hipertextual.com/files/2014/05/batman-vs-superman-dawn-of-justice.jpg?width=1200&enable=upscale", 2018),
    ]
    this.fecha= new Date(2021, 8, 12)
  }

  //Logica
  ngOnInit(): void {
    console.log(this.peliculas);
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
