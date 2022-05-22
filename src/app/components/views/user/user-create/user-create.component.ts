import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: user =
  {
    userName: '',
    email: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  cancelRegistration():void
  {
    this.router.navigate(['']);
  }

  userRegister(userName: String, email: String, password: String):void
  {
    this.userService.userCreate(userName, email, password).subscribe((answer) => {
      console.log(answer);
    });
    this.router.navigate(['']);
  }

}
