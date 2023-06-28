import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Cart } from 'src/app/shared/cart.model';


@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  
  public orders: any[];
  items: any[];
  myOrders: any[];
  item: any[];
  rtotal: number;
  users: any[];
  total: any;
  element:any;
  arr: any[];

  constructor(private router: Router, private userService: UserService, private http: HttpClient) { }

  
  ngOnInit(): void {
    this.refreshorders();
  }

  
  refreshorders() {
    this.userService.getfinalorder().subscribe((res:any) => {
      this.myOrders = res;
     
      console.log(this.myOrders)
    })
  }

}
