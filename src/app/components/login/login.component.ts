import { UserModel } from 'src/app/shared/models/user.model';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginUser: UserModel = new UserModel();
  jsonData:any;
  welcomeMsg:any;
  constructor(private auth:AuthService) { }
 LogIn(user:UserModel){
    this.loginUser= {
      Id: 0,
      User_name: user.User_name,
      First_name: user.First_name,
      Last_name: user.Last_name,
      Password: user.Password,
      Email: user.Email,
      Phone_number: user.Phone_number,
      IsSuccess: false,
      message: [
        'string'
      ],
      Token: 'string'
    };
    this.auth.login(this.loginUser).subscribe({
      next:data=>{
        this.jsonData=data;
          // if(data.message[data.message.length - 1] == "registered Successfully")
            this.auth.storeToken(data.Token);
            this.jsonData = data;
            this.welcomeMsg ="Welcome back, "+this.jsonData.user_name;
      }
    }); 
  }
}

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