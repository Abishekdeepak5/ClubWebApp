import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CreateClubComponent } from '../../component/create-club/create-club.component';
import { Router } from '@angular/router';
<<<<<<< HEAD
import {MatSidenavModule} from '@angular/material/sidenav';
export interface PeriodicElement {
  league: string;
  position: number;
  team: number;
  activeLeague: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, league: '2', team: 1, activeLeague: '1'},
  {position: 2, league: '3', team: 4, activeLeague: '2'},
  {position: 3, league: '3', team: 6, activeLeague: '3'},

];
=======
import { ClubService } from '../../shared/services/club.service';
import { MyClub, RegisteredClub } from '../../shared/models/club.model';
import { CommonModule} from '@angular/common';
import { DateformatPipe } from '../../shared/Pipes/date-mask.pipe';

>>>>>>> 361416787402be3fe727e0d6ea37aa25d15d0724

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  standalone: true,
<<<<<<< HEAD
  imports: [MatTableModule,CardModule,ButtonModule,MatSidenavModule],
=======
  imports: [MatTableModule,CardModule,ButtonModule,CommonModule,DateformatPipe],
>>>>>>> 361416787402be3fe727e0d6ea37aa25d15d0724
})
export class HomeComponent implements OnInit{
  displayedColumns: string[] = ['', 'Total League', 'Teams', 'Active Leagues'];
<<<<<<< HEAD
  dataSource = ELEMENT_DATA;
  sidebarVisible: boolean = false; 

constructor(private router:Router){}
=======
  myClubs:MyClub[]=[];
  regClubs:RegisteredClub[]=[];
constructor(private router:Router,private clubService:ClubService){}
  ngOnInit(): void {
    this.clubService.getMyClub().subscribe((myclub:MyClub[]) => {
      this.myClubs =myclub;
      });
      
      this.clubService.getRegisterClub().subscribe((regclub:RegisteredClub[]) => {
        this.regClubs =regclub;
        });
    }
>>>>>>> 361416787402be3fe727e0d6ea37aa25d15d0724

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaXNoZWs1QGdtYWlsLmNvbSIsImlkIjoiMjUiLCJuYmYiOjE3MDc3NTg5NjEsImV4cCI6MTcwODM2Mzc2MSwiaWF0IjoxNzA3NzU4OTYxfQ.a1oktU-PjclYCvnpBqcPP5xAOV6JhLNgLLZa2Q6eJdk
goToPage(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
goToPage2(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
}