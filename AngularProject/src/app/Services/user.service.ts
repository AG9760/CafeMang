import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from '../shared/food.model';
import { User } from '../shared/user.model';
import { Cart } from '../shared/cart.model';

@Injectable()
export class UserService {
  selectedFood: Food;
  items: any[];
  foods: Food[];
  user: User[];
  id: string;
  readonly baseURL = 'http://localhost:8080/api/user/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient,private route: ActivatedRoute ) {
   
  } 



  getFoodList(){
    return this.http.get('http://localhost:8080/api/user/getallfooditem');
  }
 

  myprofile() {
    const id = localStorage.getItem('userID');
    return this.http.get(this.baseURL + "myprofile/"+id );
  }
  
  editprofile(body: any) {
    const id = localStorage.getItem('userID');
    return this.http.put(this.baseURL + "editprofile/"+id, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  feedback(body: any) {
    return this.http.post(this.baseURL + "sendfeedback", body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  addcartitems(food: any) {
    const id = localStorage.getItem('userID');
    const obj = {food:food, id:id,useremail:localStorage.getItem('useremail')};
    return this.http.post(this.baseURL + "addtocart", obj);
  }

  getcart()
  {
    const id = localStorage.getItem('userID');
    return this.http.get<any[]>(this.baseURL + "getcart/"+id, { headers: this.headers });
  }


  deleteCartItem(name: string) {
    return this.http.delete(this.baseURL + "deletefromcart/" + name + '/' + localStorage.getItem('userID'))
  } 

  addfinalorder(items: any,total: number) {
    
    console.log("item",items,total)
    return this.http.post(this.baseURL + "finalorder", { items, total });
  }

  
  getfinalorder()
  {
    const id = localStorage.getItem('userID');
    return this.http.get<any[]>(this.baseURL + "getfinalorder/"+id, { headers: this.headers });
  }

}



