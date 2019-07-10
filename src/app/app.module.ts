import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddEmployeeComponent} from './app.addEmployee';
import {ShowEmployeeComponent} from './app.showEmployee';
import {SearchEmployeeComponent} from './app.searchEmployee';

const routes:Routes=[
{path:'add',component:AddEmployeeComponent},
{path:'show',component:ShowEmployeeComponent},
{path:'search',component:SearchEmployeeComponent}
];

@NgModule({
    imports: [
        BrowserModule,HttpClientModule,RouterModule.forRoot(routes),FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,ShowEmployeeComponent,SearchEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }