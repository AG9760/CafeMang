import { Component,OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AdminService } from 'src/app/Services/admin.service';
// import { AuthService } from 'src/app/Services/auth.service';
 
declare const M: any;

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css'],
  providers:[AdminService]
})
export class AddfoodComponent implements OnInit {
  // image:any;
  foodname:any;
  foodprice:any;
  foodqty:any;
  public errorMessage: any;
  public styl: any;
  

  constructor(private router: Router,private adminService: AdminService) { }

  ngOnInit(): void {
    console.log('add food component')
    this.resetForm();
  }

  // onSubmit(f: NgForm) {
  //   this.foodname =f.controls.foodname.value;
  //   this.foodprice =f.controls.foodprice.value;
  //   this.foodqty = f.controls.foodqty.value;
  //   if(this.foodprice==0)
  //   {
  //     this.foodprice=1;
  //   }
  //   if(this.foodqty<-1)
  //   {
  //     this.foodqty=0;
  //   }
  //   const formData = new FormData();
  //   // formData.append('file', this.image);
  //   formData.append('foodname', this.foodname);
  //   formData.append('foodprice', this.foodprice);
  //   formData.append('foodqty', this.foodqty);
  //   console.log(JSON.stringify(formData));
  //   this.adminService.addfood(JSON.stringify(formData)).subscribe(
  //     data => {
  //       if (data) {
  //         // console.log(data['msg']);
  //         this.adminService.setMessage("successfully item added", "#43b581");
  //         // this.router.navigate(['/admin/seefood'])
  //       }
  //       if (data) {
  //         this.adminService.setMessage("successful add food", "#f04747");
  //       }
  //       // console.log(data);
  //     },
  //     (error) => {
  //       if (error instanceof HttpErrorResponse) {
  //         // this.authService.logoutUser();
  //         // this.router.navigate(['/error'])
  //       }
  //       console.log(error);
  //     }
  //   )

  // }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.adminService.selectedFood = {
      _id: "",
      foodname: "",
    foodprice: 0,
    // foodimage: "",
    foodqty: 0
  
    }
  }
 
  onSubmit(form: NgForm) {
    this.adminService.postFood(form.value).subscribe((res) => {
      this.resetForm(form);
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
      alert("Add food successfully")
    })
}


}
