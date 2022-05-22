import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  button_name:string = "arrow_forward"
  rotate = false;
  displayHome = false;

  constructor(private router: Router) { }

  showDrawer = false;

  ngOnInit(): void {
  }

  onClick():void
  {
    if(!this.rotate) this.button_name = "arrow_back";
    else this.button_name = "arrow_forward"
    this.rotate = !this.rotate;
  }

  navigateToHome():void
  {
    this.router.navigate(['']);
  }
}
