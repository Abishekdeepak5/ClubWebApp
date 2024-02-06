import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  storeToken(token: any) {
    sessionStorage.setItem("token",token);
  }
  
  register(formdata: UserModel) {
    return this.http.post<UserModel>(`${environment.host}/api/User/Registration`,
      formdata
    );
  }

  login(formdata:UserModel){
    return this.http.post<UserModel>(`${environment.myurl}/api/User/Authentication`,
      formdata
    );
  }

  
  
}
