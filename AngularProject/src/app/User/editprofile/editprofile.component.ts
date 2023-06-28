import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {


  public name: any;
  public contact: any;
  public email: any;
  public user: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
      this.getData();
  }

  getData(): void { 
    this.userService.myprofile().subscribe((res) => {
      this.user = res as User[];
    })
  }

  onSubmit(form: NgForm) {
    this.userService.editprofile(form.value).subscribe(
      data => {
        if (data) {
          alert("update profile successfully submitted")
          this.router.navigate(['/user/myprofile'])
        }
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
         console.log(error)
        }
      }
  )}
}
