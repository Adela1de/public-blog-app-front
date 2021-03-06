import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../user/user.model';
import { UserService } from '../user/user.service';
import { article } from './article-read-model.model';
import { comment } from './comments.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private userService: UserService) { }

  createArticle(userId: String, article: article):void
  {
    const url = `${this.baseUrl}articles/${userId}`
    this.http.post(url, article);
  }

  findAll():Observable<article[]>
  {
    const url = `${this.baseUrl}articles`
    return this.http.get<article[]>(url);
  }

  findById(id: String):Observable<article>
  {
    const url = `${this.baseUrl}articles/${id}`
    return this.http.get<article>(url)
  }

  findCommentsById(id: String):Observable<comment[]>
  {
    const url = `${this.baseUrl}articles/comments/${id}`
    return this.http.get<comment[]>(url);
  }

  findByUsername(username: String):Observable<article[]>
  {
    const url = `${this.baseUrl}articles/by?username=${username}`;
    return this.http.get<article[]>(url);
  }

  postComment(text: String, user_commented: user, article_commented: article):Observable<comment>
  {
    const url = `${this.baseUrl}articles/article/${article_commented.id}`
    return this.http.post<comment>(url, {text, user_commented, article_commented});
  }

  addFavorite(userId: String, articleId: String):void
  {
    const url = `${this.baseUrl}articles/favorites/${userId}/${articleId}`
    this.http.put<user>(url, {}).subscribe((answer) => {
      this.userService.user = answer;
    });
  }

}
