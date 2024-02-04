import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { UserModel } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  registerUser: UserModel = new UserModel();
  constructor(private fb:FormBuilder,private http: HttpClient){}

  isConfirmPasswordError = (control:any) => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  };
  
  registerForm = this.fb.group({
    First_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.isConfirmPasswordError });
  get fullName(){
    return this.registerForm.controls['First_name'];
  }
  get email(){
    return this.registerForm.controls['email'];

  }
  get password(){
    return this.registerForm.controls['password'];

  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];

  }

  onSubmit(){
      // this.registerUser={...this.registerForm.value};
  }
  }

