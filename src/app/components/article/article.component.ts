import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'myArticle',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  public titulo: string
  public homeText = 'Bienvenido al master en framework Angular'
  @Input() articles: Article[]
  public url: string
  constructor(
  ) {
    this.titulo = "Últimos artículos"
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

}
