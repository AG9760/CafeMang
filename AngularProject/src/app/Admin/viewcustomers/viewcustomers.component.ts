import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/shared/user.model';


@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.component.html',
  styleUrls: ['./viewcustomers.component.css']
})
export class ViewcustomersComponent {
  public users: any[];

  constructor(private authService: AuthService, private router: Router, private adminService: AdminService) { }
 
  ngOnInit(): void {
    this.getData();
  }
  
  getData() {
    
    this.adminService. getAlluser().subscribe((res) => {
      this.users = res as User[];
    })
  }

  
      
    }
  

