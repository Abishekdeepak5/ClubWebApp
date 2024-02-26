import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CreateClubComponent } from '../../component/create-club/create-club.component';
import { Router } from '@angular/router';
import { ClubService } from '../../shared/services/club.service';
import { MyClub, RegisteredClub } from '../../shared/models/club.model';
import { CommonModule} from '@angular/common';
import { DateformatPipe } from '../../shared/Pipes/date-mask.pipe';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegisterClubsComponent } from '../../component/register-clubs/register-clubs.component';



@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  standalone: true,

  imports: [MatTableModule,CardModule,ButtonModule,CommonModule,DateformatPipe,MatDialogModule,RegisterClubsComponent],
})
export class HomeComponent implements OnInit{
  selectedNavItem: string = 'RegisteredClubs'; 
  clubs: any[] = [ 
    { League: 'Club 1', start: 'march', End: 'april', Teams:'2',Matches:'3' },
    { League: 'Club 2', start: 'april', End: 'may', Teams:'2',Matches:'5' },
    { League: 'Club 3', start: 'may', End: 'june', Teams:'3',Matches:'4' }
  ];

  showMyClubsContent(): void {
    this.selectedNavItem = 'myClubs'; 
  }
  showTennisContent(): void {
    this.selectedNavItem = 'Tennis'; 
  }
  showRegisteredContent(): void {
    this.selectedNavItem = 'RegisteredClubs'; 
  }

  sidebarVisible: boolean = false; 

  myClubs:MyClub[]=[];
  regClubs:RegisteredClub[]=[];

  selectClub:any;
constructor(private router:Router,private clubService:ClubService){}
  ngOnInit(): void {
    if(this.clubService.listOfClub.length==0 || this.clubService.isNewClub){
      this.clubService.getMyClub().subscribe((myclub:MyClub[]) => {
          this.myClubs =myclub;
          this.clubService.listOfClub=myclub;
          this.clubService.isNewClub=false;
      });
    }
    else{
      this.myClubs=this.clubService.listOfClub;
    }
    this.clubService.getRegisterClub().subscribe((regclub:RegisteredClub[]) => {
        this.regClubs =regclub;
    });
    }

   selectMyClub(myClub:MyClub){
      this.selectClub=myClub;
      this.clubService.setMyClub(myClub);
    }
    selectRegClub(club:RegisteredClub){
      this.clubService.setRegClub(club);
    }
  goToPage(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
goToPage2(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
}
