import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent  {
  
  constructor(private authService: AuthService, private router: Router) { }


  logoutuser() {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
  }
  

