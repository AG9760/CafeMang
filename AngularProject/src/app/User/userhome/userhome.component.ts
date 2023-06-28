import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
// import { AuthService } from '../../Services/auth.service';
import { UserService } from 'src/app/Services/user.service';
import { Food } from '../../shared/food.model'
import {Cart} from '../../shared/cart.model'

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent implements OnInit {
  Fooditems: any;
  food: any;
  foodname:any;
  foodprice:any;
  foodqty: any;
  Selectedqty :any;
  quantity = 1;

  constructor(private router: Router, private userService:UserService) { }

  ngOnInit(): void {
    console.log('view food component')
    this.refreshFoodItems();
  }


  refreshFoodItems() {
    console.log('hdsbchsbahcsdchusdhcuj')
    this.userService.getFoodList().subscribe((res: any) => {
      console.log('res',res);
      this.Fooditems = res as Food[];
    })
  }
  
  inc(food: { Selectedqty: number; }){
    if(food.Selectedqty != 10){
      food.Selectedqty += 1;
    }
  }

  dec(food: { Selectedqty: number; }){
    if(food.Selectedqty != 1){
      food.Selectedqty -= 1;
    }
  }

  addtocart(food: any) {
    console.log('inatc')
    this.userService.addcartitems(food).subscribe(
      (response:any) => {
        console.log(response);
        localStorage.setItem('objectID', response.id);
        localStorage.setItem('items', response.food);
        // this.router.navigate(['user/cart']);
    
        // Handle success, e.g., show a success message or update the cart UI
      },
      (error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      }
    );
  }


 
}
