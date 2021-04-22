import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  public pagText = 'Bienvenido al master en framework Angular'
  public titulo: string
  public articles: Article[]
  public last:any = true
  constructor(
    private _ArticleService: ArticleService
  ) {
    this.titulo = "Últimos artículos !!"
  }

  ngOnInit(): void {
    this._ArticleService.getArticles(this.last).subscribe(
      response =>{
        if(response.articles){
          this.articles = response.articles;
          console.log(this.articles);
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

}
