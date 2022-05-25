import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { article } from '../article-read-model.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {

  displayedColumns: string[] = ['title', 'user', 'categories', 'actions'];
  
  articles: article[] = []
  username: String = "";

  constructor(private articleService: ArticleService, private router: Router) { }

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

  findByAuthor():void
  {
    console.log(this.username)
    this.router.navigate(['articles/'+this.username])
  }

}
