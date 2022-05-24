import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from '../article-read-model.model';
import { ArticleService } from '../article.service';
import {Location} from '@angular/common'; 

@Component({
  selector: 'app-article-find-by-username',
  templateUrl: './article-find-by-username.component.html',
  styleUrls: ['./article-find-by-username.component.css']
})
export class ArticleFindByUsernameComponent implements OnInit {

  displayedColumns: string[] = ['title', 'user', 'categories'];
  articles: article[] = [];
  username: String = "";

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.findByAuthor();
  }

  findByAuthor():void
  {
    if(this.username == "") { this.router.navigate(['/articles']) };
    
    this.articleService.findByUsername(this.username).subscribe((answer) => {
      console.log(answer)
      this.articles = answer;
    })

    this.location.replaceState("/articles/"+this.username);
  }

  cancel():void
  {
    this.router.navigate(['/articles'])
  }

}
