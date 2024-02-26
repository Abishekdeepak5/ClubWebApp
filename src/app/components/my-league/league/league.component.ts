import { Component, OnInit } from '@angular/core';
import { LeagueModel } from '../../../shared/models/league.model';
import { ClubService } from '../../../shared/services/club.service';
import { Router } from '@angular/router';
import { LeagueService } from '../../../shared/services/league.service';
import { DateformatPipe } from '../../../shared/Pipes/date-mask.pipe';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css'],
  standalone:true,
  imports:[DateformatPipe,
    CommonModule,]
})
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaXNoZWs1QGdtYWlsLmNvbSIsImlkIjoiMjUiLCJuYmYiOjE3MDg3OTMxMTQsImV4cCI6MTcwOTM5NzkxNCwiaWF0IjoxNzA4NzkzMTE0fQ.d6SDeLN4FfzVhINC90LHkfs2xKXhTIh_mtr_u27oySc
export class LeagueComponent implements OnInit{
  League:LeagueModel=new LeagueModel();
  clubDetail:any;
  myLeagues:LeagueModel[]=[];
  ngOnInit(): void {
    
    this.clubService.selectedClub$.pipe(first()).subscribe((item:any)=>{
      if(item==null){
        this.router.navigate(['/home']);
      }else{
        this.clubDetail=item;
          this.leagueService.myLeague(this.clubDetail?.id).pipe(first()).subscribe(
            (leagues:LeagueModel[])=>{
              this.myLeagues=leagues;
            },
          (err: any)=>{this.router.navigate(['/home']);}
          );
        
      }
    });
  }
  constructor(private clubService:ClubService,private leagueService:LeagueService,private router: Router) {}
  createLeague(){
    console.log(this.clubDetail);
    this.router.navigate(['/createLeague']);
  }
  selectLeague(league:LeagueModel){
    console.log(league);
    this.leagueService.setLeague(league);

  }
}
