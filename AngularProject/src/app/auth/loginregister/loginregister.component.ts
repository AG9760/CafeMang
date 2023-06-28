import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/Services/auth.service';
import * as jQuery from 'jquery';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css'],
})
export class LoginregisterComponent implements OnInit {
  msg: any = 'SignUp';
  // msg: any = [];
  public errorMessage: any;
  public styl: any;
  avail: boolean = true;
  user: any = {};
  credentials: any = {};

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log('hjfhjgjg');
  }

  onSubmitLogin(f: NgForm) {
    this.authService.login(f.value).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.userService.id = response.id;
        // Store the token and role in local storage or a state management solution
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        localStorage.setItem('userID', response.id);
        localStorage.setItem('useremail', response.useremail);
        if (response.role === 'admin') {
          this.router.navigate(['admin/adminhome']);
        } else {
          this.router.navigate(['user/userhome']);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmitRegister(f: NgForm) {
    this.authService.signup(f.value).subscribe(
      (response) => {
        console.log(response.msg);
        alert("Successfully registered, Please Sign In");
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // setMessage(msg:any,color:any)
  // {
  //   this.errorMessage = msg;
  //   this.styl = {
  //     backgroundColor: color,
  //   }
  //   setTimeout(() => {
  //     this.errorMessage = null;
  //   }, 4000);
  // }

  signinup() {
    this.msg = !this.avail ? 'SignUp' : 'Login';
    this.avail = !this.avail;
    console.log('dscsdsf');
  }
}
