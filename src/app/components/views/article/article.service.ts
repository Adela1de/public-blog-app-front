import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { articleById } from './article-read-by-id-model';
import { article } from './article-read-model.model';

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

  findById(id: String):Observable<articleById>
  {
    const url = `${this.baseUrl}artiles/${id}`
    return this.http.get<articleById>(url)
  }

  findByUsername(username: String):Observable<article[]>
  {
    const url = `${this.baseUrl}articles/by?username=${username}`;
    return this.http.get<article[]>(url);
  }

}
