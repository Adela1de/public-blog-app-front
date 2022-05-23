import { Component, OnInit } from '@angular/core';
import { article } from '../article-read-model.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {

  displayedColumns: string[] = ['title', 'user', 'categories'];
  
  articles: article[] = []

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void
  {
    this.articleService.findAll().subscribe((answer) => {
      this.articles = answer;
      console.log(this.articles)
    })
  }

}
