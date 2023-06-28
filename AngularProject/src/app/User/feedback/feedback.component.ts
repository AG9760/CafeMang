import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { UserService } from 'src/app/Services/user.service';

declare const M: any;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
   console.log("send feedback")
  }


  onSubmit(form: NgForm) {
    this.userService.feedback(form.value).subscribe((res) => {
      if (res) {
        alert("Feedback submission")
        window.location.reload();
      }
    },
    (error) => {
      if (error instanceof HttpErrorResponse) {
        alert("feedback not submit")
      }
    })
}
  
  

}
