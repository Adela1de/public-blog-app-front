import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { article } from '../article-read-model.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {

  article: article =
  {
      title: '',
      text: ''
  } 

  constructor(private articleService: ArticleService, private userService: UserService) { }

  ngOnInit(): void {
  }

  create():void
  {
    if(!this.userService.checkIfLogged()){ this.userService.message("You have to be logged to post articles! "); }
    else{ 
      this.articleService.createArticle(this.userService.user.id!, this.article); 
      console.log(this.article)
    }
  }

}
