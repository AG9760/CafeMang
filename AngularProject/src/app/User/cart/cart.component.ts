import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Cart } from 'src/app/shared/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[];
  item: any[];
  rtotal: number;
  users: any[];
  total: any;
  element:any;
  arr: any[];
  constructor(private router: Router , private userService: UserService) { }

  ngOnInit(): void {
    this.refreshcarts();
  }
  
  refreshcarts() {
   
    this.userService.getcart().subscribe((res:any) => {
      this.items = res as Cart[];
      console.log(this.items);
      // localStorage.setItem('objectID', res.id);
      // localStorage.setItem('items', res.items);
      
      this.rtotal = 0; // Initialize the total to 0 before iterating over the items

        res[0].items.forEach((element: { foodprice: string; Selectedqty: string; }) => {
          const itemTotal = parseInt(element.foodprice) * parseInt(element.Selectedqty);
          this.rtotal += itemTotal; // Accumulate the item totals
        });

      this.total = this.rtotal;
    })
  }

  deleteItem(food: string) {
    this.userService.deleteCartItem(food).subscribe(
      (response) => {
        console.log('Item deleted from cart');
        alert('Item deleted from cart');
        window.location.reload();
        // Handle success, such as updating the UI or refreshing the cart
      },
      (error) => {
        console.error('Error deleting item from cart:', error);
        // Handle error, such as showing an error message
      }
    );
  }

  finalorder(item: any, total: number) {
    console.log('final')
    if (confirm('Are you sure to place this order ?') == true) {
      this.userService.addfinalorder(item, total).subscribe(
        (response) => {
          console.log(response);
          alert('Order added successfully')
          this.router.navigate(['/user/myorders'])
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  
  }

