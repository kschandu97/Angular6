import {Component,OnInit} from '@angular/core'
import {EmployeeService} from './app.employeeservice';

@Component({
    selector:'show-emp',
    templateUrl:'showemployee.html'
})
export class ShowEmployeeComponent implements OnInit{
    constructor(private myservice:EmployeeService){}

    empall:any[]=[];
    ngOnInit(){
    this.empall=  this.myservice.getAllEmployee();
    }
}