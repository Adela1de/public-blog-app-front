import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { articleById } from '../article-read-by-id-model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-get',
  templateUrl: './article-get.component.html',
  styleUrls: ['./article-get.component.css']
})
export class ArticleGetComponent implements OnInit {

  id: string = "";

  article: articleById = 
  {
    id: '',
    title: '',
    userName: '',
    comments: [] = [],
    commentedBy: [] = []
  };

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void
  {
    this.articleService.findById(this.id).subscribe((answer) => {
      console.log(answer)
      this.article = answer;
    })
  }

}
