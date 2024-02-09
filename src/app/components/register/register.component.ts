import { Component } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';     
import { Inject } from '@angular/core';
import { UserModel } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/auth.service';


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
  
  isConfirmpasswordError = (control:any) => {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
    
    if (password && confirmpassword && password.value !== confirmpassword.value) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  };
  registerForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    last_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmpassword: ['', Validators.required],
    phone_number:['', Validators.required],
  }, { validators: this.isConfirmpasswordError });
  
  
  get first_name(){return this.registerForm.controls['first_name'];}
  get last_name(){return this.registerForm.controls['last_name'];}
  get email(){return this.registerForm.controls['email'];}
  get password(){return this.registerForm.controls['password'];}
  get confirmpassword(){return this.registerForm.controls['confirmpassword'];}
  get phone_number(){return this.registerForm.controls['phone_number'];}

  onRegister() {
    
    console.log(localStorage.getItem('auth-user'));
    this.registerUser = {
      id: 0,
      user_name: `${this.registerForm.get('first_name')?.value} ${this.registerForm.get('last_name')?.value}`,
      first_name: `${this.registerForm.get('first_name')?.value}`,
      last_name: `${this.registerForm.get('last_name')?.value}`,
      email:`${ this.registerForm.get('email')?.value}`,
      password: `${this.registerForm.get('password')?.value}`,
      phone_number: `${this.registerForm.get('phone_number')?.value?.toString}`,
      isSuccess: false,
      message: [],
      token: '',
    };
    this.auth.register(this.registerUser).pipe(first()).subscribe(
      (data: any)=>{
        this.jsonData=data;
      },
      (err: { message: string; })=>{
        this.errorMessage = err.message;
      });      

    // const apiUrl = 'https://clubmanage.azurewebsites.net/api/User/Registration';    
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });
    // this.http.post<UserModel>().subscribe({
    //    next:data=> {
        
    //     if(data.Message[data.Message.length - 1] == "registered Successfully")
    //         this.auth.storetoken(data.token);
    //     else  
    //       this.errorMessage = data.Message[data.Message.length - 1]             ;
          
    //     }
    //   }
    // );
  }
  
  
  }



