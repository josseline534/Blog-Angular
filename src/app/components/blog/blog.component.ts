import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})

export class BlogComponent implements OnInit {
  public titulo: string
  public blogText = 'Blog'
  public articles: Article[]
  public url: string
  constructor(
    private _ArticleService: ArticleService
  ) {
    this.url = Global.url;
    this.titulo = "Blog !!"
  }

  ngOnInit(): void {
    console.log(this._ArticleService.prueba());
    this._ArticleService.getArticles().subscribe(
      response =>{
        if(response.articles){
          this.articles = response.articles;
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

}
