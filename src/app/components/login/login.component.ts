import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginUser: UserModel = new UserModel();
  jsonData:any;
  // welcomeMsg:string='';
  welcomeMsg:any;
  constructor(private http: HttpClient) { }
 LogIn(user:UserModel){
    const apiUrl = 'https://localhost:7251/api/User/Authentication';  
    const postData={
      id: 0,
      user_name: user.User_name,
      first_name: user.First_name,
      last_name: user.Last_name,
      password: user.Password,
      email: user.Email,
      phone_number: user.Phone_number,
      isSuccess: true,
      message: [
        'string'
      ],
      token: 'string'
    };
      const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post(apiUrl, postData, { headers }).subscribe(
        (data)=>{
          if (data && data.hasOwnProperty('user_name')) {
            this.jsonData = data;
            this.welcomeMsg ="Welcome back, "+this.jsonData.user_name;
          }
      // this.welcomeMsg=data.user_name;
    }
    );
  }
}
