import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { User } from '../../shared/user.model'


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

 
  public name: any;
  public contact: any;
  public email: any;
  public user: any;
  public _id: any;
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    console.log('myprofile')
    this.getData();
  }


  getData(): void { 
    this.userService.myprofile().subscribe((res) => {
      this.user = res as User[];
    })
  }

  gotoEditprofile() {
    this.router.navigate(['/user/editprofile'])
  }

}
