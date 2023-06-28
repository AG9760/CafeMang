import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Feedback } from '../../shared/feedback.model'


declare const C: any;

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
  
export class ViewfeedbackComponent implements OnInit {
  public feedbacks: any[];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    console.log("view feedback");
    this.refreshFeedbacks();
  }

  refreshFeedbacks() {
    this.adminService.getAllfeedback().subscribe((res) => {
      this.feedbacks = res as Feedback[];
    })
  }


  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adminService.deleteFeedback(_id,).subscribe((res) => {
        this.refreshFeedbacks();
        C.toast({ html: 'Deleted successfully', classes: 'rounded' });
        window.location.reload();
      });
    }
  }



}
