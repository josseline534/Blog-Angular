import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service'

@Component({
  selector: 'mySidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public searchString: string
  public article: Article
  constructor(
    private _ArticleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  goSearch(){
    this._router.navigate(['/buscar', this.searchString])
  }
}
