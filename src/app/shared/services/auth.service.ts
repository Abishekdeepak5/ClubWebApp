import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storeToken(token: any) {
    sessionStorage.setItem("token",token);
  }
  
  register(formdata: UserModel) {
    
    return this.http.post<UserModel>("https://clubmanage.azurewebsites.net/api/User/Registration",
      formdata
    );
  }
  constructor(private http:HttpClient) { 
    
  }
  
}
