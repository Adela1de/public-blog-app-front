import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  constructor(private http: HttpClient) { }

  login(email: String, password: String):void
  {
    const url = `${this.baseUrl}users/login`
    this.http.post<user>(url, {email, password}).subscribe((answer) =>{
      this.user = answer;
    });
  }

  userCreate(userName: String, email: String, password: String):Observable<user>
  {
    const url = `${this.baseUrl}users/register`
    console.log(userName)
    console.log(email)
    console.log(password)
    return this.http.post<user>(url, {userName, email, password});
  }

  checkIfLogged():boolean
  {
    if(this.user.id == null) return false;
    return true;
  }

}
