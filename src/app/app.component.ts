import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NetClubUi';
  selectedItem: any;
  data = [
    { name: 'Item 1', description: 'Description for item 1' },
    { name: 'Item 2', description: 'Description for item 2' },
  ];

  onItemClicked(item: any) {
    this.selectedItem = item;
  }
}
