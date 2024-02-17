import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClubModel, MyClub, RegisteredClub } from '../models/club.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import {USER_KEY,TOKEN_KEY,EMAIL_KEY} from '../contants/data-model';

import { BehaviorSubject } from 'rxjs';
@Injectable({
 providedIn: 'root',
})
export class ClubService{
  clubDetails: BehaviorSubject<ClubModel> = new BehaviorSubject(new ClubModel());
  constructor(private http: HttpClient, private router: Router) { }

  createClub(club:ClubModel){
    const headers=this.getHeader();
    return this.http.post<ClubModel>(`${environment.host}/api/Club/CreateClub`, club, { headers });
  }
  joinClub(club:ClubModel){
    const headers=this.getHeader();
    return this.http.post<ClubModel>(`${environment.host}/api/Club/JoinClub`,club, { headers });
  }

  getMyClub(): Observable<MyClub[]> {
      const headers=this.getHeader();
      return this.http.get<MyClub[]>(`${environment.host}/api/Club/MyClubs`,{headers});
  }
  getRegisterClub(): Observable<RegisteredClub[]> {
    const headers=this.getHeader();
    return this.http.get<RegisteredClub[]>(`${environment.host}/api/Club/RegisteredClubs`,{headers});
    }

  getHeader():HttpHeaders{
    const tokenKey=localStorage.getItem(TOKEN_KEY)?.toString();
    return new HttpHeaders({
      'Authorization': 'Bearer ' +tokenKey,
      'Content-Type': 'application/json',
    });
  }
}