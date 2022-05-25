import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from '../article-read-model.model';
import { ArticleService } from '../article.service';
import { comment } from '../comments.model';

@Component({
  selector: 'app-article-get',
  templateUrl: './article-get.component.html',
  styleUrls: ['./article-get.component.css']
})
export class ArticleGetComponent implements OnInit {

  id: string = "";

  article: article = 
  {
    id: '',
    title: '',
    userName: '',
    text: ''
  };

  comments: comment = 
  {
    comments: [] = [],
    commentedBy: [] = []
  }  

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
    this.findCommentsForArticle();
  }

  findById():void
  {
    this.articleService.findById(this.id).subscribe((answer) => {
      console.log(answer)
      this.article = answer;
    })
  }

  findCommentsForArticle():void
  {
    this.articleService.findCommentsById(this.id).subscribe((answer) => {
      console.log(answer)
      this.comments = answer;
    })
  }

  cancel():void
  {
    this.router.navigate(['articles']);
  }

}
