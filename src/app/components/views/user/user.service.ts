import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { article } from '../article/article-read-model.model';
import { user } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = environment.baseUrl;

  user: user = 
  {
    id: '',
    userName: '',
    email: '',
    password: ''
  }

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  login(email: String, password: String):void
  {
    const url = `${this.baseUrl}users/login`
    this.http.post<user>(url, {email, password}).subscribe((answer) =>{
      this.user = answer;
      console.log(this.user)
    });
  }

  userCreate(userName: String, email: String, password: String):Observable<user>
  {
    const url = `${this.baseUrl}users/register`
    return this.http.post<user>(url, {userName, email, password});
  }
  

  checkIfLogged():boolean
  {
    if(this.user.id == ""){ return false; }
    else { return true; }
  }

  findFavorites():Observable<article[]>
  {
    const url = `${this.baseUrl}users/favorites/${this.user.id}`
    return this.http.get<article[]>(url);
  }
  
  message(str: string):void
  {
    this._snack.open(`${str}`, "OK", {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000
    })
  }

}
