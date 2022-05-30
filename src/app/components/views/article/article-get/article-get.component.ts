import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { article } from '../article-read-model.model';
import { ArticleService } from '../article.service';
import { comment } from '../comments.model';

@Component({
  selector: 'app-article-get',
  templateUrl: './article-get.component.html',
  styleUrls: ['./article-get.component.css']
})
export class ArticleGetComponent implements OnInit {

  displayedColumns: string[] = ['comments', 'commentedBy'];
  id: string = "";
  text: String = "";

  article: article = 
  {
    id: '',
    title: '',
    userName: '',
    text: ''
  };

  comments: comment[] = []; 
  authService: any;

  constructor(private articleService: ArticleService, 
    private userService: UserService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
    this.findCommentsForArticle();
  }

  findById():void
  {
    this.articleService.findById(this.id).subscribe((answer) => {
      this.article = answer;
    })
  }

  findCommentsForArticle():void
  {
    this.articleService.findCommentsById(this.id).subscribe((answer) => {
      this.comments = answer;
    })
  }

  cancel():void
  {
    this.router.navigate(['articles']);
  }

  postComment():void
  {
    if(!this.userService.checkIfLogged()){ this.userService.message("You have to be logged in order to post a comment! "); }
    else
    {
      this.articleService.postComment(this.text, this.userService.user, this.article).subscribe((answer) => {
        this.comments = [...this.comments, answer];
      });
    }
  }

}
