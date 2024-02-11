import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabledisplayComponent } from './tabledisplay.component';
import { TableRoutingModule } from './tabledisplay-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    TabledisplayComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    TableRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    CardModule,

  ],
})
export class TableModule { }
