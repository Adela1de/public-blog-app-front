import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../views/user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  button_name:string = "arrow_forward"
  rotate = false;

  constructor(private router: Router, private userService: UserService) { }

  showDrawer = false;

  ngOnInit(): void {
  }

  onClick():void
  {
    if(!this.rotate) this.button_name = "arrow_back";
    else this.button_name = "arrow_forward"
    this.rotate = !this.rotate;
  }

  navigateToLogin():void
  {
    if(!this.userService.checkIfLogged()) { this.router.navigate(['/login']); }
    else
    {
      this.userService.message("You are already logged in!");
      this.router.navigate(['']);
    }
      
  }

}
