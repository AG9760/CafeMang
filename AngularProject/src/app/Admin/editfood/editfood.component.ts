import { Component,OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AdminService } from 'src/app/Services/admin.service';
import { Food } from '../../shared/food.model'

declare const M: any;

@Component({
  selector: 'app-editfood',
  templateUrl: './editfood.component.html',
  styleUrls: ['./editfood.component.css'],
  providers: [AdminService]
})
export class EditfoodComponent implements OnInit {
  
  Fooditems: any;
  foodname: any;
  foodprice: any;
  foodqty: any;
  public errorMessage: any;
  public styl: any;
  

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    console.log('get food component')
    this.adminService.getFoodListById().subscribe((res) => {
      this.Fooditems = res as Food[];
    })
    
  }
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
 
  // onSubmit(form: NgForm) {
  //   this.adminService.putFood(form.value).subscribe((res) => {
      
  //     M.toast({ html: 'Update successfully', classes: 'rounded' });
  //     this.router.navigate(['/admin/seefood'])

  //   })
  // }

  onSubmit(form: NgForm) {
    this.adminService.putFood(form.value).subscribe(
      data => {
        if (data) {
          this.router.navigate(['/admin/seefood'])
        }
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.router.navigate(['/error'])
        }
      }
  )}
  
  

}
