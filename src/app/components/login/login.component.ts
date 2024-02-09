import { Component,Injectable } from '@angular/core';
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
export class LoginComponent{
  
  loginUser: UserModel = new UserModel();
  jsonData:any;
  welcomeMsg:any;

  constructor(private auth:AuthService) {}
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
  hello(){
    console.log("Hello");
  }

}



 //   data=>{
          
      //   this.jsonData=data;
      //     // if(data.message[data.message.length - 1] == "registered Successfully")
      //       this.auth.storeToken(data.token);
      //       this.jsonData = data;
      //       this.welcomeMsg ="Welcome back, "+this.jsonData.user_name;
      // }




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