import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ClubService } from '../../shared/services/club.service';
import { first } from 'rxjs';
import { ClubModel } from '../../shared/models/club.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-join-club',
  templateUrl: './join-club.component.html',
  styleUrls: ['./join-club.component.css']
})
export class JoinClubComponent {
  Club:ClubModel=new ClubModel();
  clublabel:string="";
  Msg:string="";
  constructor(private club:ClubService,private router:Router) {}
  joinClub(){
    // console.log(this.clublabel);
    this.Club.club_label=this.clublabel;
    // const club = { club_label: this.clublabel };
    this.club.joinClub(this.Club).pipe(first()).subscribe(
      (msg:any)=>{
        this.Msg=msg.text;
        console.log(msg);
        this.router.navigate(['/home']).finally(() =>
        window.location.reload()
        );
      },
    (err: any)=>{
      if(err.error && err.error.text)
        this.Msg=err.error.text;
      else
      this.Msg=err;
    this.router.navigate(['/home']).finally(() =>
        window.location.reload()
        );
      }
      
   
  );
  }
}
