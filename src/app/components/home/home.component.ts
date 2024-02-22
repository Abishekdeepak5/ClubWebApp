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
  selectedNavItem: string = 'myClubs'; 
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
    this.clubService.getMyClub().subscribe((myclub:MyClub[]) => {
        this.myClubs =myclub;
    });
    this.clubService.getRegisterClub().subscribe((regclub:RegisteredClub[]) => {
        this.regClubs =regclub;
    });
    }

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaXNoZWs1QGdtYWlsLmNvbSIsImlkIjoiMjUiLCJuYmYiOjE3MDc3NTg5NjEsImV4cCI6MTcwODM2Mzc2MSwiaWF0IjoxNzA3NzU4OTYxfQ.a1oktU-PjclYCvnpBqcPP5xAOV6JhLNgLLZa2Q6eJdk
    selectMyClub(myClub:MyClub){
      this.selectClub=myClub;
      this.clubService.setMyClub(myClub);
    }
  goToPage(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
goToPage2(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
}
