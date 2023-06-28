import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import routes from "../app-routing.module"
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/food.model';

@Injectable()
export class AdminService {
  selectedFood: Food;
  foods: Food[];
  readonly baseURL = 'http://localhost:8080/api/admin/';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private route: ActivatedRoute) { }


  postFood(food: Food) {
    return this.http.post(this.baseURL + "addfood", food);
  }

  getFoodList() {
    return this.http.get(this.baseURL+"getallfooditem");
  }
  getFoodListById() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('admins',this.route.snapshot.paramMap)
    return this.http.get(this.baseURL+"getallfooditem/" + id);
  }

  putFood(food: Food) {
    const id = this.route.snapshot.paramMap.get('id');
    return this.http.put(this.baseURL + "editfood/" + id, food);
  }

  deleteFood(_id: string) {
    const id = this.route.snapshot.paramMap.get('id');
    return this.http.delete(this.baseURL +"deletefood/" + _id);
  }

  getAllfeedback()
  {
    return this.http.get(this.baseURL + "getallfeedback", { headers: this.headers });
  }

  getAlluser() {
    return this.http.get(this.baseURL + "getalluser", { headers: this.headers });
  }

 

  deleteFeedback(_id: string)
  {
    const id = this.route.snapshot.paramMap.get('id');
    return this.http.delete(this.baseURL + "deletefeedback/" + _id, { headers: this.headers });
  }
}