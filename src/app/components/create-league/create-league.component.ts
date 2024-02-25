import { Component, Injectable, OnInit } from '@angular/core';
import { LeagueModel} from '../../shared/models/league.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { MyClub } from '../../shared/models/club.model';
import { ClubService } from '../../shared/services/club.service';
import { LeagueService } from '../../shared/services/league.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    CardModule
  ],
})
@Injectable()
export class CreateLeagueComponent implements OnInit{
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
   
  constructor(private clubService:ClubService,private leagueService:LeagueService,private router: Router) {
  }
  League:LeagueModel=new LeagueModel();
  clubDetail:any;
  schedule_type:string='';
ngOnInit(): void {
  this.clubService.selectedClub$.subscribe((item:any)=>{
    if(item==null){
      this.router.navigate(['/home']);
    }
      this.clubDetail=item;
  });
}
    postLeague(){
      this.League.club_id=this.clubDetail?.id;
      this.leagueService.createLeague(this.League).subscribe((msg:any)=>{
        console.log(msg);
      });
      console.log(this.clubDetail);
      console.log(this.League);
      this.leagueService.saveLeague(this.League); 
      this.router.navigate(['/league-details']);
    }
    navigateToDisplayLeague() {
      this.router.navigate(['/display-league'], {
        state: {
          clubName: this.clubDetail?.name,
          leagueName: this.League.name,
          startDate: this.League.start_date,
          endDate: this.League.end_date
        }
      });
    }
}