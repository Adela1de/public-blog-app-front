import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../user/user.model';
import { article } from './article-read-model.model';
import { comment } from './comments.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) { }

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

  addFavorite(articleId: String, userId: String):Observable<user>
  {
    const url = `${this.baseUrl}articles/favorites/${articleId}/${userId}`
    return this.http.post<user>(url, {});
  }

}
