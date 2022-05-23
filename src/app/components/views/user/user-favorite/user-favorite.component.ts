import { Component, OnInit } from '@angular/core';
import { article } from '../../article/article-read-model.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css']
})
export class UserFavoriteComponent implements OnInit {

  displayedColumns: string[] = ['title', 'user', 'categories'];
  
  favorites: article[] = []
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void
  {
    this.userService.findFavorites().subscribe((answer) => {
      this.favorites = answer;
    })
  }

}
