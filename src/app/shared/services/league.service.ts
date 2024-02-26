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
import { Team } from '../models/team.model';

@Injectable({
 providedIn: 'root',
})
export class LeagueService{
  getSavedLeagues(): LeagueModel[] {
    throw new Error('Method not implemented.');
  }
  saveLeague(League: LeagueModel) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient, private router: Router) { }
  LeagueDetails: BehaviorSubject<LeagueModel> = new BehaviorSubject(new LeagueModel());
  selectedLeague$ = this.LeagueDetails.asObservable();
  createLeague(league:LeagueModel){
    const headers=this.getHeader();
    return this.http.post<LeagueModel>(`${environment.myurl}/api/League/CreateLeague`, league, { headers });
  }

  myLeague(club_id:number){
    const headers=this.getHeader();
    return this.http.get<LeagueModel[]>(`${environment.myurl}/api/League/GetClubLeagues?club_Id=${club_id}`, { headers });
  }
  TeamToJoinLeague(team:Team){
    console.log(team);
    const headers=this.getHeader();
    return this.http.post<string>(`${environment.myurl}/api/Team/CreateTeam`,{team},{ headers });
  }

  getLeagueTeams(league_id:number){
    const headers=this.getHeader();
    return this.http.get<Team[]>(`${environment.myurl}/api/League/GetLeagueTeams?league_id=${league_id}`, { headers });     
  }

  getHeader():HttpHeaders{
    const tokenKey=localStorage.getItem(TOKEN_KEY)?.toString();
    return new HttpHeaders({
      'Authorization': 'Bearer ' +tokenKey,
      'Content-Type': 'application/json',
    });
  }
  setLeague(league:LeagueModel){
    this.LeagueDetails.next(league);
    this.router.navigate(['/leagueTeam']);
  }
}
