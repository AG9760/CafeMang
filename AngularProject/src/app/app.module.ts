import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexNavBarComponent } from './index/index-nav-bar/index-nav-bar.component';
import { MainComponent } from './index/main/main.component';
import { HeaderComponent } from './index/header/header.component';
import { FoodComponent } from './index/food/food.component';
import { ChefsComponent } from './index/chefs/chefs.component';
import { LoginregisterComponent } from './auth/loginregister/loginregister.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './Services/auth.service';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { AddfoodComponent } from './Admin/addfood/addfood.component';
import { SeefoodComponent } from './Admin/seefood/seefood.component'; 
import { AdminService } from './Services/admin.service';
import { UserService } from './Services/user.service'
import { EditfoodComponent } from './Admin/editfood/editfood.component';
import { UserNavComponent } from './User/user-nav/user-nav.component';
import { UserhomeComponent } from './User/userhome/userhome.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { FeedbackComponent } from './User/feedback/feedback.component';
import { ViewfeedbackComponent } from './Admin/viewfeedback/viewfeedback.component';
import { MyprofileComponent } from './User/myprofile/myprofile.component';
import { EditprofileComponent } from './User/editprofile/editprofile.component';
import { ViewcustomersComponent } from './Admin/viewcustomers/viewcustomers.component';
import { CartComponent } from './User/cart/cart.component';
import { MyordersComponent } from './User/myorders/myorders.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexNavBarComponent,
    MainComponent,
    HeaderComponent,
    FoodComponent,
    ChefsComponent,
    LoginregisterComponent,
    AdminNavComponent,
    AddfoodComponent,
    SeefoodComponent,
    EditfoodComponent,
    UserNavComponent,
    AdminhomeComponent,
    UserhomeComponent,
    FeedbackComponent,
    ViewfeedbackComponent,
    MyprofileComponent,
    EditprofileComponent,
    ViewcustomersComponent,
    CartComponent,
    MyordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,AdminService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
