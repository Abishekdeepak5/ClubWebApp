import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClubModel, MyClub, RegisteredClub } from '../models/club.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import {USER_KEY,TOKEN_KEY,EMAIL_KEY} from '../contants/data-model';

import { BehaviorSubject } from 'rxjs';
import { LeagueModel } from '../models/league.model';
@Injectable({
 providedIn: 'root',
})
export class LeagueService{
  constructor(private http: HttpClient, private router: Router) { }

  createLeague(league:LeagueModel){
    const headers=this.getHeader();
    return this.http.post<LeagueModel>(`${environment.myurl}/api/League/CreateLeague`, league, { headers });
  }

  getHeader():HttpHeaders{
    const tokenKey=localStorage.getItem(TOKEN_KEY)?.toString();
    return new HttpHeaders({
      'Authorization': 'Bearer ' +tokenKey,
      'Content-Type': 'application/json',
    });
  }
}
