import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
      console.log(answer);
      this.user = answer;
    });
  }

}
