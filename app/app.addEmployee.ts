import { Component } from "@angular/core";
import { Sort } from "@angular/material/sort";



@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})  
export class AddEmployeeComponent{
    id:number;
    name:string;
    salary:number;
    department:string;
    date:string;
    empAll:any[]=[
        {id:1001,name:'Rahul',salary:9000,department:'JAVA',date:'6/12/2014'},
        {id:1002,name:'Vikash',salary:11000,department:'ORAAPS',date:'6/12/2017'},
        {id:1003,name:'Uma',salary:12000,department:'JAVA',date:'6/12/2010'},
        {id:1004,name:'Sachin',salary:11500,department:'ORAAPS',date:'11/12/2017'},
        {id:1005,name:'Amol',salary:7000,department:'.NET',date:'1/1/2018'},
        {id:1006,name:'Vishal',salary:17000,department:'BI',date:'9/12/2012'},
        {id:1007,name:'Rajita',salary:21000,department:'BI',date:'6/7/2014'},
         ];
    sortedData:any;
    constructor(){
        this.sortedData=this.empAll.slice();
    }
    sortData(sort:Sort){
        const data=this.empAll.slice();
        if(!sort.active || sort.direction===''){
            this.sortedData=data;
            return;
    }
    this.sortedData=data.sort((a, b)=>{
        const isAsc=sort.direction==='asc';
        switch(sort.active){
            case 'id': return compare(a.id,b.id,isAsc);
            case 'name': return compare(a.name,b.name,isAsc);
            case 'salary': return compare(a.salary,b.salary,isAsc);
            case 'department': return compare(a.department,b.department,isAsc);
            case 'date': return compareDate(a.date,b.date,isAsc);

            default: return 0;
           

        }
    });
}
}
function compare(a:number|string,b:number|string,isAsc:boolean)
{
    return(a<b?-1:1)*(isAsc?1:-1);
}
function compareDate(a:string,b:string,isAsc:boolean)
{
    return(new Date(a)<new Date(b)?-1:1)*(isAsc?-1:1);
}