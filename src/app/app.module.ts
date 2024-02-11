import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CardModule } from 'primeng/card';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CreateClubComponent } from './component/create-club/create-club.component';
import { JoinClubComponent } from './component/join-club/join-club.component';
import { TableComponent } from './component/table/table.component';;
import { CommonModule } from '@angular/common';
import { ModalpopupComponent } from './component/modalpopup/modalpopup.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateClubComponent,
    JoinClubComponent,
    TableComponent,
    ModalpopupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CardModule,
    MatCardModule,
    MatTableModule,
    FormsModule,CommonModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
