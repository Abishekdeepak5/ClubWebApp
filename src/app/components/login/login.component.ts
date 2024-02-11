import { Component,Injectable, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CardModule } from 'primeng/card';
import {Observable} from 'rxjs';
import { UserModel } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit{
  
  loginUser: UserModel = new UserModel();
  jsonData:any;
  welcomeMsg:any;

  constructor(private auth:AuthService) {}
  ngOnInit(): void {
    // this.auth.getData().subscribe((data:string)=>{
    //   this.jsonData=data;
    // });
  }
 LogIn(user:UserModel){
    this.auth.login(user).pipe(first()).subscribe(
        (msg:string)=>{
          // this.welcomeMsg ="Welcome back, "+this.jsonData.user_name;
          this.welcomeMsg=msg;

        },
      (err: any)=>{
          this.welcomeMsg=err;
        }
     
    ); 
  }
  counter:number=0;
  hello(){
    console.log("Hello");
  }

}




// this.loginUser= {
  //   id: 0,
  //   user_name: user.user_name,
  //   first_name: user.first_name,
  //   last_name: user.last_name,
  //   password: user.password,
  //   email: user.email,
  //   phone_number: user.phone_number,
  //   isSuccess: false,
  //   message: [
  //     'string'
  //   ],
  //   token: 'string'
  // };

// const apiUrl = 'https://localhost:7251/api/User/Authentication';  
// const postData={
//   id: 0,
//   user_name: user.User_name,
//   first_name: user.First_name,
//   last_name: user.Last_name,
//   password: user.Password,
//   email: user.Email,
//   phone_number: user.Phone_number,
//   isSuccess: true,
//   message: [
//     'string'
//   ],
//   token: 'string'
// };


// this.http.post(apiUrl, postData, { headers }).subscribe(
//     (data)=>{
//       if (data && data.hasOwnProperty('user_name')) {
//         this.jsonData = data;
//         this.welcomeMsg ="Welcome back, "+this.jsonData.user_name;
//       }
// }
// );