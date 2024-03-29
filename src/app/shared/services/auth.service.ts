import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import {USER_KEY,TOKEN_KEY,EMAIL_KEY} from '../contants/data-model';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDetails: BehaviorSubject<UserModel> = new BehaviorSubject(new UserModel());

  constructor(private http: HttpClient, private router: Router) { }
  
  register(formdata: UserModel) {
    return this.http.post<UserModel>(`${environment.myurl}/api/User/Registration`,
      formdata
    ).pipe(
      map(authData=>{
        if(authData && authData.token && authData.isSuccess){
          this.setInformation(authData);
          this.router.navigate(['/login']).finally(() =>
          window.location.reload()
          );
        }
        return authData.message[authData.message.length - 1];
      // console.log(authData);
    })
    );
  }

  login(formdata:UserModel){
    return this.http.post<UserModel>(`${environment.myurl}/api/User/Authentication`,formdata).pipe(map((authData)=>{
      if(authData && authData.token && authData.isSuccess){
        this.setInformation(authData);
        this.setEmail(authData.email);
        this.router.navigate(['/home']).finally(() =>
        window.location.reload()
        );
      }
      return authData.message[authData.message.length - 1];
    }));
  }

  setInformation(authData: UserModel) {
    const userData:UserModel=authData;
    this.storeToken(userData.token);
    this.setUser(authData);
  }

  storeToken(token: any) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken():string |null{
    return localStorage.getItem(TOKEN_KEY);
  }

  public setUser(user: UserModel) {
    localStorage.removeItem(USER_KEY);
    this.setUserObs(user);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public setEmail(email: string) {
    localStorage.removeItem(EMAIL_KEY);
    //store: boolean, if (store)
    localStorage.setItem(EMAIL_KEY, email);
  }

  setUserObs(user: UserModel) {
    this.userDetails.next(user);
  } 
  
  getUserObs(){
    return this.userDetails.asObservable();
  }

  getUser(){
    const user: any = localStorage.getItem(USER_KEY);
    const userInfo: UserModel = JSON.parse(user);
    return userInfo;
  }
}
// private dataSubject = new BehaviorSubject<string>('Initial Value');
// data$: any
// getData(){
//   return this.data$= this.dataSubject.asObservable();
// }

  // updateData(newData: string): void {
  //   this.dataSubject.next(newData);
  // }