import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: user = 
  {
    email:'',
    password: ''
  }

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  cancelLogin():void
  {
    this.router.navigate(['']);
  }

  userRegisterNavigate():void
  {
    this.router.navigate(['/register']);
  }

  userLogin(email: String, password: String):void
  {
    this.userService.login(email, password);
    this.router.navigate(['']);
  }

}
