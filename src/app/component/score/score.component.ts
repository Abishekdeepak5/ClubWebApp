import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  router: any;
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }
}

