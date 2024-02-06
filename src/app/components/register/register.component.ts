import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerUser: UserModel = new UserModel();
  errorMessage:string = ""  ;
  jsonData:any;
  constructor(private fb:FormBuilder,private auth:AuthService){}
  
  isConfirmPasswordError = (control:any) => {
    const password = control.get('Password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  };
  registerForm = this.fb.group({
    First_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    Last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    Phone_number:['', Validators.required],
  }, { validators: this.isConfirmPasswordError });
  
  
  get First_name(){return this.registerForm.controls['First_name'];}
  get Last_name(){return this.registerForm.controls['Last_name'];}
  get Email(){return this.registerForm.controls['Email'];}
  get Password(){return this.registerForm.controls['Password'];}
  get confirmPassword(){return this.registerForm.controls['confirmPassword'];}
  get Phone_number(){return this.registerForm.controls['Phone_number'];}

  onRegister() {
    this.registerUser = {
      Id: 0,
      User_name: `${this.registerForm.get('First_name')?.value} ${this.registerForm.get('Last_name')?.value}`,
      First_name: `${this.registerForm.get('First_name')?.value}`,
      Last_name: `${this.registerForm.get('Last_name')?.value}`,
      Email:`${ this.registerForm.get('Email')?.value}`,
      Password: `${this.registerForm.get('Password')?.value}`,
      Phone_number: `${this.registerForm.get('Phone_number')?.value?.toString}`,
      IsSuccess: false,
      message: [],
      Token: '',
    };
    this.auth.register(this.registerUser)
    .subscribe({
      next:data=>{
        this.jsonData=data;
          if(data.message[data.message.length - 1] == "registered Successfully")
            this.auth.storeToken(data.Token);
          else  
            this.errorMessage = data.message[data.message.length - 1]             ;
          
      }
    });      

    // const apiUrl = 'https://clubmanage.azurewebsites.net/api/User/Registration';    
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });
    // this.http.post<UserModel>().subscribe({
    //    next:data=> {
        
    //     if(data.Message[data.Message.length - 1] == "registered Successfully")
    //         this.auth.storeToken(data.Token);
    //     else  
    //       this.errorMessage = data.Message[data.Message.length - 1]             ;
          
    //     }
    //   }
    // );
  }
  
  
  }



