import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myArticle',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public titulo: string
  public homeText = 'Bienvenido al master en framework Angular'
  constructor() {
    this.titulo = "Últimos artículos"
  }

  ngOnInit(): void {
  }

}
