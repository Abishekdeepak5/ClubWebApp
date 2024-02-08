import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';

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
  selector: 'table-basic-example',
  styleUrls: ['home.component.html'],
  templateUrl: 'home.component.css',
  standalone: true,
  imports: [MatTableModule],
})
export class TableBasicExample {
  displayedColumns: string[] = ['', 'Total League', 'Teams', 'Active Leagues'];
  dataSource = ELEMENT_DATA;
}
