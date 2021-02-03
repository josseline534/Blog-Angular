import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public titulo: string
  public blogText = 'Blog'
  constructor() {
    this.titulo = "Blog !!"
  }

  ngOnInit(): void {
  }

}
