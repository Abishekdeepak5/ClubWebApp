import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeagueModel } from '../../../shared/models/league.model';
import { ClubService } from '../../../shared/services/club.service';
import { LeagueService } from '../../../shared/services/league.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { DateformatPipe } from '../../../shared/Pipes/date-mask.pipe';
import { Team } from '../../../shared/models/team.model';

@Component({
  selector: 'app-register-league',
  templateUrl: './register-league.component.html',
  styleUrls: ['./register-league.component.css'],
  standalone:true,
  imports:[CommonModule,DateformatPipe]
})
export class RegisterLeagueComponent implements OnInit{
  League:LeagueModel=new LeagueModel();
  clubDetail:any;
  team_name:any;
  regLeagues:LeagueModel[]=[];
  team:Team=new Team();

  ngOnInit(): void {
    this.team.team_id=0;
    this.team.court_id=1;
    this.team.points=0;
    this.team.rating=0;
      this.team.team_name="Team Ak";
    this.clubService.selectedRegClub$.pipe(first()).subscribe((item:any)=>{
      if(item==null){
        this.router.navigate(['/home']);
      }else{
        this.clubDetail=item;
        console.log(this.clubDetail);
          this.leagueService.myLeague(this.clubDetail?.id).pipe(first()).subscribe(
            (leagues:LeagueModel[])=>{
              this.regLeagues=leagues;
              console.log(leagues);
            },
          (err: any)=>{this.router.navigate(['/home']);}
          );
        
      }
    });    
  }
  constructor(private clubService:ClubService,private leagueService:LeagueService,private router: Router) {}
  joinLeague(league:LeagueModel){
    this.team_name=window.prompt('Enter Your Team name:');
    console.log(this.team_name);
      // this.team.team_name=this.team_name;
   
      this.team.club_id=this.clubDetail?.id;
      this.team.league_id=league.id;
      console.log(this.team);
      this.leagueService.TeamToJoinLeague(this.team).subscribe(
        (msg:any)=>{
          console.log(msg);
        },
        (err:any)=>{
          console.log(err);
        }
      );
  }
  selectLeague(league:LeagueModel){
    this.leagueService.setLeague(league);
  }
}
