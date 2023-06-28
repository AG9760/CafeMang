import { Component,OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AdminService } from 'src/app/Services/admin.service';
import { Food } from '../../shared/food.model'

declare const M: any;
 
@Component({
  selector: 'app-seefood',
  templateUrl: './seefood.component.html',
  styleUrls: ['./seefood.component.css']
})
export class SeefoodComponent implements OnInit {

  Fooditems: any;
  foodname:any;
  foodprice:any;
  foodqty:any;
  public errorMessage: any;
  public styl: any;
  
  constructor(private router: Router,private adminService: AdminService) { }

  ngOnInit(): void {
    console.log('see food component')
    this.refreshFoodItems();
  }

  refreshFoodItems() {
    this.adminService.getFoodList().subscribe((res) => {
      this.Fooditems = res as Food[];
    })
  }

  onEdit(food:Food) {
    this.adminService.selectedFood = food;

  }

  

 
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adminService.deleteFood(_id,).subscribe((res) => {
        this.refreshFoodItems();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
        window.location.reload();
      });
    }
  }

}
