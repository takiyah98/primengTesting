import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataTableDemoComponent } from './data-table-demo/data-table-demo.component';

import {ButtonModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataTableDemoComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
