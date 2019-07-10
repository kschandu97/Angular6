import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './app.employeeservice'
import {Router} from '@angular/router'


@Component({
    selector:'add-emp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent{
    empid: any;
    empname: any;
    empsalary: any;
    empdept: any;

constructor(private service:EmployeeService,private router:Router){}
myallData:any;


addEmp(){
    this.myallData={empid:this.empid,empname:this.empname,empsalary:this.empsalary,empdept:this.empdept}
    if(this.service.addEmployee(this.myallData)){
    }
    this.router.navigate(['show'])
}
}
