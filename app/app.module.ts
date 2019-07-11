import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import {AddEmployeeComponent} from './app.addEmployee';
import {FormsModule} from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    imports: [
        BrowserModule,FormsModule,
        MatSortModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }