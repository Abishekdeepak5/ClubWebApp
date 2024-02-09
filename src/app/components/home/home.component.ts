import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

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

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  standalone: true,
  imports: [MatTableModule,CardModule,ButtonModule],
})
export class HomeComponent {
  displayedColumns: string[] = ['', 'Total League', 'Teams', 'Active Leagues'];
  dataSource = ELEMENT_DATA;
}
