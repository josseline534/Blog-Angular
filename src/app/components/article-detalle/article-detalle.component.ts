import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service'
import { Article } from '../../models/article'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Global } from '../../services/global'

@Component({
  selector: 'app-article-detalle',
  templateUrl: './article-detalle.component.html',
  styleUrls: ['./article-detalle.component.css'],
  providers: [ArticleService]
})
export class ArticleDetalleComponent implements OnInit {
  public article: Article
  public id: string
  public url = Global.url
  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute, //sacar parametros de la url
    private _router: Router //redirecciones a otras páginas
  ) {
  }

  ngOnInit(): void {
    //Recoger parametros de la url
    this._route.params.subscribe((params: Params) =>{
      this.id = params.id
    })
    this._articleService.getArticleDetalle(this.id).subscribe(
      response => {
        if(response.article){
          this.article = response.article
        }else{
          this._router.navigate(['/home'])
        }
      },
      error =>{
        console.log(error);
        this._router.navigate(['/home'])
      }
    )
  }

}
