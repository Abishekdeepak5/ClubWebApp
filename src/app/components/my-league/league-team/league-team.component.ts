import { CommonModule,Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../../shared/services/league.service';
import { Router } from '@angular/router';
import { LeagueModel } from '../../../shared/models/league.model';
import { ClubService } from '../../../shared/services/club.service';
import { first } from 'rxjs';
import { Team } from '../../../shared/models/team.model';
import { DateformatPipe } from '../../../shared/Pipes/date-mask.pipe';

@Component({
  selector: 'app-league-team',
  templateUrl: './league-team.component.html',
  styleUrls: ['./league-team.component.css'],
  standalone:true,
  imports:[CommonModule,DateformatPipe]
})
export class LeagueTeamComponent implements OnInit {
  league:LeagueModel=new LeagueModel();
  teams:Team[]=[];
  constructor(private clubService:ClubService,private leagueService:LeagueService,private router:Router,private location:Location){}
  ngOnInit(): void {
    this.leagueService.selectedLeague$.pipe(first()).subscribe((item:any)=>{
      if(item==null){
        this.location.back();
      }
        this.league=item;
        this.leagueService.getLeagueTeams(this.league.id).pipe(first()).subscribe(
          (team:Team[])=>{
            this.teams=team
            console.log(team);
          },
          (err:any)=>{
            console.log(err.error.text);
            console.log(err);
          }
          );
    });
  }

  displayLeague(){
    console.log(this.league);
    console.log(this.clubService.listOfClub);
  }


}
