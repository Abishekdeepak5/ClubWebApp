import { Component,ElementRef,Injectable,OnInit } from '@angular/core';
import { ClubModel } from '../../shared/models/club.model';
import { ClubService } from '../../shared/services/club.service';
import { first } from 'rxjs';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    CardModule,
  ],
})
@Injectable()
export class CreateClubComponent{
  Club:ClubModel=new ClubModel();
  constructor(private club:ClubService,private auth:AuthService,private router:Router) {

  }
  ngOnInit(): void {
  }

  welcomeMsg:any;
  display(){
    console.log(this.Club);
  }
  postClub(){
    
    this.Club.created_by=this.auth.getUser().user_name;
    this.club.createClub(this.Club).pipe(first()).subscribe(
      (msg:any)=>{
        this.welcomeMsg=msg;
        this.router.navigate(['/home']).finally(() =>
        window.location.reload()
        );
      },
    (err: any)=>{
        this.welcomeMsg=err;
        this.router.navigate(['/home']).finally(() =>
        window.location.reload()
        );
      }
   
  );
  }

}
