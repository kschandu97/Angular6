import {Injectable} from '@angular/core'
import {HttpClient} from'@angular/common/http'

@Injectable({
  providedIn:'root'
})
export class EmployeeService{
    constructor(private http:HttpClient){}
    empall:any[]=[
      {empid:1001,empname:"chandu",empsalary:10001.33,empdept:"java"},
      {empid:1002,empname:"chan",empsalary:10001.33,empdept:"java"},
      {empid:1003,empname:"chand",empsalary:10001.33,empdept:"java"}
    ];
    getAllEmployee(){
      return this.empall;
        //return this.http.get("assets/employee.json");
    }
    addEmployee(data:any){
      this.empall.push(data);
      return true;
    }
}