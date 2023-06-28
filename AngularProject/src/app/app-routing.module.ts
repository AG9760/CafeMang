import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './index/main/main.component';
import { LoginregisterComponent } from './auth/loginregister/loginregister.component';
import { FormsModule } from '@angular/forms';
import { AddfoodComponent } from './Admin/addfood/addfood.component';
import { SeefoodComponent } from './Admin/seefood/seefood.component';
import { EditfoodComponent } from './Admin/editfood/editfood.component';
import { UserhomeComponent } from './User/userhome/userhome.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { FeedbackComponent } from './User/feedback/feedback.component';
import { ViewfeedbackComponent } from './Admin/viewfeedback/viewfeedback.component';
import { MyprofileComponent } from './User/myprofile/myprofile.component';
import { EditprofileComponent } from "./User/editprofile/editprofile.component"
import { ViewcustomersComponent } from './Admin/viewcustomers/viewcustomers.component';
import { CartComponent } from './User/cart/cart.component';
import { MyordersComponent } from './User/myorders/myorders.component';


const routes: Routes = [
 // landing page
  { path: '', component: MainComponent },
  
   // login - register
  { path: 'login-register', component: LoginregisterComponent },
   
  //admin
  { path: 'admin/adminhome', component: AdminhomeComponent },
  { path: 'admin/addfood', component: AddfoodComponent },
  { path: 'admin/seefood', component: SeefoodComponent },
  { path: 'admin/editfood/:id', component: EditfoodComponent },
  { path: 'admin/viewfeeback', component: ViewfeedbackComponent },
  { path: 'admin/viewusers', component: ViewcustomersComponent },

  //user
  { path: 'user/userhome', component: UserhomeComponent },
  { path: 'user/feedback', component: FeedbackComponent },
  { path: 'user/myprofile', component: MyprofileComponent },
  { path: 'user/editprofile', component: EditprofileComponent },
  { path: 'user/cart', component: CartComponent },
  { path: 'user/myorders', component: MyordersComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export default routes;
