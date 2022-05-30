import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../../user/user.model';
import { UserService } from '../../user/user.service';
import { article } from '../article-read-model.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-favorite',
  templateUrl: './article-favorite.component.html',
  styleUrls: ['./article-favorite.component.css']
})
export class ArticleFavoriteComponent implements OnInit {

  id: String = "";
  article: article =
  {
    id: "",
    title: "",
    text: ""
  }

  constructor(
    private articleService: ArticleService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void
  {
    this.articleService.findById(this.id).subscribe((answer) => {
      this.article = answer;
    })
  }

  cancel():void
  {
    this.router.navigate(['/articles']);
  }

  confirm():void
  {
    this.articleService.addFavorite(this.userService.user.id!, this.article.id!);
    this.router.navigate(['/articles']);
  }

}
