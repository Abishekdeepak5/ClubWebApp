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
  myClubDetails: BehaviorSubject<MyClub> = new BehaviorSubject(new MyClub());
  regClubDetails: BehaviorSubject<RegisteredClub> = new BehaviorSubject(new RegisteredClub());
  listOfClub:MyClub[]=[];
  isNewClub:boolean=true;
  constructor(private http: HttpClient, private router: Router) { }
  selectedClub$ = this.myClubDetails.asObservable();
  selectedRegClub$=this.regClubDetails.asObservable();
  // clubObs$=this.clubDetails.asObservable();

  createClub(club:ClubModel){
    const headers=this.getHeader();
    return this.http.post<ClubModel>(`${environment.myurl}/api/Club/CreateClub`, club, { headers });
  }
  joinClub(club:ClubModel){
    const headers=this.getHeader();
    return this.http.post<ClubModel>(`${environment.myurl}/api/Club/JoinClub`,club, { headers });
  }

  getMyClub(): Observable<MyClub[]> {
      const headers=this.getHeader();
      return this.http.get<MyClub[]>(`${environment.myurl}/api/Club/MyClubs`,{headers});
  }
  getRegisterClub(): Observable<RegisteredClub[]> {
    const headers=this.getHeader();
    return this.http.get<RegisteredClub[]>(`${environment.myurl}/api/Club/RegisteredClubs`,{headers});
    }

  getHeader():HttpHeaders{
    const tokenKey=localStorage.getItem(TOKEN_KEY)?.toString();
    return new HttpHeaders({
      'Authorization': 'Bearer ' +tokenKey,
      'Content-Type': 'application/json',
    });
  }

  setMyClub(myclub:MyClub){
    this.myClubDetails.next(myclub);
    this.router.navigate(['/myLeague']);
  }

  setRegClub(club:RegisteredClub){
    this.regClubDetails.next(club);
    this.router.navigate(['/regLeague']);
  }
}
