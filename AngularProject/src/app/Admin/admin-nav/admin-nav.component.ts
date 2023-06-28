import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  constructor(private authService: AuthService, private router: Router) { }


  logoutuser() {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
  
}
